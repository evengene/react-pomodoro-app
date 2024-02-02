import { TextField, Typography } from '@mui/material';
import React from 'react';

import { useStyles } from './TimeSettings.styles';
import type { TimeSettingsProps } from './TimeSettings.types';


export const TimeSettings = (props: TimeSettingsProps) => {
  const {
    title,
    defaultValue,
    value,
    onChange,
  } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="h5" className={classes.label}>
        {title}
      </Typography>
      <TextField
        className={classes.textField}
        defaultValue={defaultValue}
        fullWidth
        InputProps={{
          classes: {
            root: classes.inputRoot,
            input: classes.input,
          },
          disableUnderline: true,
        }}
        inputProps={{
          min: 1,
          max: 60,
          className: classes.inputInner,
        }}
        onChange={onChange}
        type="number"
        value={value}
        variant="filled"
      />
    </div>
  );
}
