import React, {useContext} from 'react';
import {TimerContext} from '../../context/TimerContext';
import { Box, Tab, Tabs } from '@mui/material';
import {ThemeContext} from '../../context/ThemeContext';
import { useStyles } from './ModeSelector.styles';

import type { TabsProps } from '@mui/material';
import { ModeLabels } from '../../context/TimerContext';

const TABS = [
  {
    label: ModeLabels.Pomodoro,
    value: ModeLabels.Pomodoro,
  },
  {
    label: ModeLabels.ShortBreak,
    value: ModeLabels.ShortBreak,
  },
  {
    label: ModeLabels.LongBreak,
    value: ModeLabels.LongBreak,
  },
];

export const ModeSelector = () => {
  const { mode, setMode, setTimeLeft, setTotalTime} = useContext(TimerContext);
  const {themeColor, themeFont} = useContext(ThemeContext);
  const { classes }  = useStyles({ themeFont, themeColor});

  const onTabChangeHandler: TabsProps['onChange'] = (_, newValue) => {
    debugger;
    setMode(newValue);
    const newTime = newValue === ModeLabels.Pomodoro
      ? 25 * 60
      : newValue === ModeLabels.ShortBreak
        ? 5 * 60
        : 10 * 60;
    setTimeLeft(newTime);
    setTotalTime(newTime);
  }


  return (
    <>
      <Box className={classes.root}>
        <Tabs
          TabIndicatorProps={{style: {display: 'none'}}}
          aria-label="timer mode selector"
          onChange={onTabChangeHandler}
          value={mode}
        >
          {TABS.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              className={classes.tab}
              value={tab.value}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
}