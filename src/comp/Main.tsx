import { Button, FormControlLabel, Paper, Radio, RadioGroup } from '@material-ui/core';
import Chip from '@material-ui/core/Chip/Chip';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { grey } from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CodeBlock } from '../core/codefile-normalizer/template';
import { useStore } from '../core/state-manager';
import { SettingType } from '../type/setting';
import { PairAnalysisResult, WorkOnCbsResult } from '../type/workOnCbs';
import WorkOnFileWorker from './webworker/workOnFile.worker';
import Highlight from 'react-highlight';

const emptyObject = {};
type StageType = 'wait-for-file-selection' | 'working' | 'done';

const worker = new WorkOnFileWorker();

const useStyles = makeStyles((theme) => ({
  mainPage: {
  },
  greyPaper: {
    backgroundColor: grey[50],
    margin: '1em 0',
    minHeight: '20em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingProgress: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-0.7em',
    marginLeft: '-0.6em',
  },
  buttonWrapper: {
    position: 'relative',
  },
  radioGroup: {
    flexDirection: 'row',
  },
  pageDetail: {
    margin: '2em 0',
  },
  pageDetailBlock: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em 0',
  },
  pageDetailBlockRate: {
    fontSize: '2em',
  },
  codeBlock: {
    minWidth: '20em',
    flexBasis: '20em',
    flexGrow: 1,
    marginLeft: '1em',
  },
  codeBlockCodeWrapper: {
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',
    overflow: 'hidden',
    height: '30em',
  }
}));

interface FileWorkProps {
  onFileSelect: (file: File) => void;
  curStage: StageType;
}

function FileWork(props: FileWorkProps) {
  const classes = useStyles();
  const ref = useRef<HTMLInputElement>(null);
  const { onFileSelect, curStage } = props;

  const handleSelectFile = () => {
    if (!ref.current) {
      console.error('[DEV] no input element, it may be a bug.');
      return;
    }
    ref.current.click();
    ref.current.onchange = function() {
      const [file] = ref.current?.files ?? [];
      onFileSelect(file);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className={classes.buttonWrapper}>
        <Button variant='contained' color='primary' onClick={handleSelectFile} disabled={curStage === 'working'}>
          {curStage === 'wait-for-file-selection' && "Select a file to work!"}
          {curStage === 'working' && "Loading..."}
          {curStage === 'done' && "Done!"}
        </Button>
        {curStage === 'working' && <CircularProgress size={20} className={classes.loadingProgress} />}
        <input type='file' ref={ref} style={{ display: 'none' }}/>
      </div>
    </div>
  )
}



const CodeBlock = ({ cb }: {cb: CodeBlock}) => {
  const classes = useStyles();
  return (
    <div className={classes.codeBlock}>
      <Chip label={cb.codeId} color='primary' />
      <div className={classes.codeBlockCodeWrapper}>
        <Highlight language='clike'>{cb.code}</Highlight>
      </div>
      {/* <div>{cb.code}</div> */}
    </div>
  )
}

interface PageDetailProps {
  analysisResult: WorkOnCbsResult;
}

function PageDetail(props: PageDetailProps) {
  const classes = useStyles();
  const { analysisResult } = props;
  const problemIds = useMemo(() => {
    return Object.keys(analysisResult);
  }, [analysisResult]);
  const [curSelectId, setCurSelectId] = useState<string>('');

  useEffect(() => {
    if (analysisResult !== emptyObject) {
      setCurSelectId(problemIds[0] ?? '');
    }
  }, [analysisResult, problemIds]);

  function PageDatailBlock({ index }: { index: number }) {
    const { a, b, rate } = analysisResult[curSelectId][index];
  
    return (
      <div className={classes.pageDetailBlock}>
        <div className={classes.pageDetailBlockRate}>{(rate * 100).toFixed(2)} %</div>
        <CodeBlock cb={a} />
        <CodeBlock cb={b} />
      </div>
    )
  }

  return (
    <div className={classes.pageDetail}>
      <RadioGroup name="cur-problem-id" value={curSelectId} onChange={(ev) => setCurSelectId(ev.target.value)} classes={{ root: classes.radioGroup }}>
        {problemIds.map(id => <FormControlLabel key={id} value={id} control={<Radio />} label={id} />)}
      </RadioGroup>
      <div>
      {
        analysisResult[curSelectId] &&
        (
          analysisResult[curSelectId].slice(0, 20).map((pair, index) => {
            return <PageDatailBlock key={pair.problemId + '-' + index} index={index} />
          })
        )
      }
      </div>
    </div>
  )
}

function PageMain() {
  const [file, setFile] = useState<File>();
  const [savSetting] = useStore<SettingType>('setting', {
    fileWork: 'SZUOJ-Log',
    checkSchema: 'Simple(C++)',
    rate: 0.9,
  }, true);
  const [analysisResult, setAnalysisResult] = useState<WorkOnCbsResult>(emptyObject);
  const [curStage, setCurStage] = useState<StageType>('wait-for-file-selection');
  const classes = useStyles();

  // Deal with file
  useEffect(() => {
    if (file) {
      setCurStage('working');

      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = function(ev) {
        if (!ev.target) {
          return;
        }
        worker.postMessage([ev.target.result, savSetting]);
        worker.onmessage = function(ev: any) {
          const { err, data, evName } = ev.data;

          if (evName === 'process-rate') {
            console.log(data);
            return;
          }
          if (evName === 'done') {
            setAnalysisResult(data);
          } else if (evName === 'error') {
            console.error(err);
          }

          setCurStage('done');
          setTimeout(() => {
            setCurStage('wait-for-file-selection');
          }, 2000);
        }
      }
    }
  }, [file, savSetting]);

  return (
    <div className={classes.mainPage}>
      <FileWork onFileSelect={setFile} curStage={curStage} />
      <PageDetail analysisResult={analysisResult} />
    </div>
  );
}

export default PageMain;
