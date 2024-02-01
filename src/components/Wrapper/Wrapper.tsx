import React, { useContext } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';
import type { IconButtonProps } from '@mui/material';
import type { PropsWithChildren } from 'react';

import { TimerContext } from '../../context/TimerContext';
import { useStyles } from './Wrapper.styles';

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {

  const { classes } = useStyles();
  const { setSettingsOpen } = useContext(TimerContext);

  const onSettingsToggle: IconButtonProps['onClick'] = () => {
    setSettingsOpen(prev => !prev);
  }

  const COPY = {
    title: 'pomodoro',
  }

  return (
    <Box className={classes.wrapper}>
      <Typography component="h1" className={classes.title}>
        {COPY.title}
      </Typography>
        {children}
      <IconButton onClick={onSettingsToggle}>
        <Settings className={classes.settingsIcon}/>
      </IconButton>
    </Box>
  )
}