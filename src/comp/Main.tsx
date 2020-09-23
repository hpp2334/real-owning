import { Box, Button, Divider, Fade, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip/Chip';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { grey } from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CodeBlock } from '../core/codefile-normalizer/template';
import { useStore } from '../core/state-manager';
import { SettingType } from '../type/setting';
import { PairAnalysisResult, WorkOnCbsResult } from '../type/workOnCbs';
import WorkOnFileWorker from './webworker/workOnFile.worker';
import { useDropzone } from 'react-dropzone';
import { List, AutoSizer, WindowScroller } from 'react-virtualized';


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
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
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
    padding: '1em',
    alignItems: 'flex-start',
  },
  pageDetailBlockRate: {
    marginRight: '1em',
  },
  codeBlock: {
    minWidth: '20em',
    flexBasis: '20em',
    flexGrow: 1,
    marginLeft: '1em',
  },
  codeBlockCodeWrapper: {
    whiteSpace: 'pre-wrap',
    marginTop: '0.5em',
    overflowY: 'auto',
    overflow: 'hidden',
    height: '30em',
    backgroundColor: '#eee',
    padding: '0.5em'
  },
  loading: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  pageFileWork: {
    display: 'flex',
    height: '40em',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1em',
    boxShadow: 'inset 0em 0em 1em #eee',
    borderRadius: '.5em',
  },
  pageFileWorkInner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  highLight: {
    minHeight: '30em',
  }
}));

interface ToolBarProps {
  onClickReset: () => void;
  curStage: StageType;
}

function ToolBar(props: ToolBarProps) {
  const classes = useStyles();
  const ref = useRef<HTMLInputElement>(null);
  const { onClickReset, curStage } = props;

  return (
    <div style={{ display: 'flex' }}>
      <div className={classes.buttonWrapper}>
        <Button variant='outlined' color='default' onClick={onClickReset}>
          RESET
        </Button>
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
        {/* <Highlight language='clike' className={classes.highLight}>{cb.code}</Highlight> */}
        <pre className={classes.highLight}><code>{cb.code}</code></pre>
      </div>
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
  const ref = useRef<HTMLElement>(null);
  

  useEffect(() => {
    if (analysisResult !== emptyObject) {
      setCurSelectId(problemIds[0] ?? '');
    }
  }, [analysisResult, problemIds]);


  function PageDatailBlock({ index, style }: { index: number, style: React.CSSProperties }) {
    const { a, b, rate } = analysisResult[curSelectId][index];
    const isLast = index === analysisResult[curSelectId].length - 1;
  
    return (
      <div key={curSelectId + '-' + index} style={style}>
        <div className={classes.pageDetailBlock}>
          <Box position="relative" display="flex" className={classes.pageDetailBlockRate}>
            <CircularProgress variant="static" value={rate * 100} color={rate * 100 >= 90 ? 'secondary' : 'primary'} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(rate * 100)}%`}</Typography>
            </Box>
          </Box>
          <CodeBlock cb={a} />
          <CodeBlock cb={b} />
        </div>
        {!isLast && <Divider light />}
      </div>
    )
  }

  return (
    <div className={classes.pageDetail}>
      <RadioGroup name="cur-problem-id" value={curSelectId} onChange={(ev) => setCurSelectId(ev.target.value)} classes={{ root: classes.radioGroup }}>
        {problemIds.map(id => <FormControlLabel key={id} value={id} control={<Radio />} label={id} />)}
      </RadioGroup>
      {/* <div>
        {
          analysisResult[curSelectId] &&
          (
            analysisResult[curSelectId].slice(0, showCount).map((pair, index) => {
              return <PageDatailBlock key={pair.problemId + '-' + index} index={index} />
            })
          )
        }
        <Button color="primary" onClick={loadMore}>Load More</Button>
      </div> */}
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer>
            {({width}) => (
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={analysisResult[curSelectId]?.length ?? 0}
                rowHeight={601}
                rowRenderer={PageDatailBlock}
                scrollTop={scrollTop}
                width={width}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  )
}

function PageFileWork({ onFileSelect }: { onFileSelect: (file: File) => void; }) {
  const onDrop = useCallback((files: File[]) => {
    const [file] = files;
    file && onFileSelect(file);
  }, []);
  const classes = useStyles();

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


  return (
    <div className={classes.pageFileWork}>
      <div {...getRootProps()} className={classes.pageFileWorkInner}>
        <Typography variant="h6" component="div" color="textSecondary">
          {
            isDragActive
            ? 'Drop the file to work'
            : 'You can drag a file to here, or click here to select a file to work'
          }
        </Typography>
        <input {...getInputProps()} />
      </div>
    </div>
  )
}

function PageLoading({ processRate, curStage }: { processRate: number; curStage: StageType }) {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <Fade in={curStage === 'working'}>
        <Box position="relative" display="inline-flex">
          <CircularProgress variant="static" value={processRate * 100} size={150}/>
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4" component="div" color="textSecondary">{`${Math.round(
              processRate * 100,
            )}%`}</Typography>
          </Box>
        </Box>
      </Fade>
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
  const [processRate, setProcessRate] = useState<number>(0);
  const handleReset = () => setCurStage('wait-for-file-selection');
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
            setProcessRate(data);
            return;
          }
          if (evName === 'done') {
            setAnalysisResult(data);
          } else if (evName === 'error') {
            console.error(err);
          }

          setCurStage('done');
        }
      }
    }
  }, [file, savSetting]);

  return (
    <div className={classes.mainPage}>
      {curStage === 'wait-for-file-selection' && <PageFileWork onFileSelect={setFile} />}
      {curStage === 'working' && <PageLoading processRate={processRate} curStage={curStage} />}
      {curStage === 'done' &&
        <React.Fragment>
          <ToolBar onClickReset={handleReset} curStage={curStage} />
          <PageDetail analysisResult={analysisResult} />
        </React.Fragment>
      }
    </div>
  );
}

export default PageMain;
