import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useStore } from '../core/state-manager';
import { SettingType, StringnifySettingType, FileWorkType, CheckSchemaType } from '../type/setting';

interface SettingProps {
  className?: string;
  onSaveSetting?: (curSetting: SettingType) => void;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    display: 'flex',
  },
  paper: {
    padding: '10px',
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const FILE_WORK: Array<FileWorkType> = [
  'SZUOJ-Log',
  'vjudge.net',
  /** @todo support customize filework */
  // 'Customize',
];

const CHECK_SCHEMA: Array<CheckSchemaType> = [
  'Simple(C++)',
]

function Setting(props: SettingProps) {
  const classes = useStyles();
  const [error] = useState<number>(0);
  const [savSetting, setSavSetting] = useStore<SettingType>('setting', {
    fileWork: 'SZUOJ-Log',
    checkSchema: 'Simple(C++)',
  }, true);
  const [curSetting, setCurSetting] = useState<StringnifySettingType>({
    ...savSetting,
  });
  const createHandleRadioChange = (key: keyof SettingType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    setCurSetting({
      ...curSetting,
      [key]: rawValue,
    });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const afterSavingSetting = {
      ...curSetting,
    };
    setSavSetting(afterSavingSetting);
    props.onSaveSetting && props.onSaveSetting(afterSavingSetting);
  }

  return (
    <Paper classes={{ root: classes.paper }}>
      <form onSubmit={onSubmit}>
        <FormControl component="fieldset" classes={{ root: classes.formControl }}>
          <FormLabel component="legend">File Worker</FormLabel>
          <RadioGroup name="fileWork" value={curSetting.fileWork} onChange={createHandleRadioChange('fileWork')}>
            {FILE_WORK.map(fileWork => <FormControlLabel key={fileWork} value={fileWork} control={<Radio />} label={fileWork} />)}
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" classes={{ root: classes.formControl }}>
          <FormLabel component="legend">Check Schema</FormLabel>
          <RadioGroup name="checkSchema" value={curSetting.checkSchema} onChange={createHandleRadioChange('checkSchema')}>
            {CHECK_SCHEMA.map(checkSchema => <FormControlLabel key={checkSchema} value={checkSchema} control={<Radio />} label={checkSchema} />)}
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" classes={{ root: classes.formControl }}>
          <Button type="submit" variant="outlined" color="primary" disabled={!!error}>
            Save
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
}

export default Setting;
