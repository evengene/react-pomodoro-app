import React, {useContext} from 'react';
import {TimerContext} from '../../context/TimerContext';
import {Box, Tab, Tabs} from '@mui/material';

const TABS = [
  {
    label: 'pomodoro',
    value: 'pomodoro',
  },
  {
    label: 'Short Break',
    value: 'shortBreak',
  },
  {
    label: 'Long Break',
    value: 'longBreak',
  },
];

export const ModeSelector = () => {
  const {setMode, setTimeLeft, setTotalTime} = useContext(TimerContext);
  const handleModeChange = (newMode) => {
    setMode(newMode);
    const newTime = newMode === 'pomodoro' ? 25 * 60 : newMode === 'shortBreak' ? 5 * 60 : 10 * 60;
    setTimeLeft(newTime);
    setTotalTime(newTime);
  };

  const [value, setValue] = React.useState(0);

  return (
    <>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '31.5px',
          background: '#161932',
          width: {xs: 327, sm: 373},
          flexShrink: 0,
          p: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            handleModeChange(TABS[newValue].value);
          }}
          aria-label="basic tabs example"
          TabIndicatorProps={{style: {display: 'none'}}} // This line removes the underline
        >
          {TABS.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              sx={{
                fontWeight: 700,
                width: {xs: 106, sm: 120},
                height: '48px',
                flexShrink: 0,
                borderRadius: '26.5px',
                background: 'transparent',
                color: '#FFF',
                textTransform: 'lowercase',
                fontSize: {xs: 12, sm: 14},
                '&.Mui-selected': {
                  background: '#F87070',
                  color: '#1E213F',
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
}