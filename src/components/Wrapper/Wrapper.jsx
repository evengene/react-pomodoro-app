import {Box, IconButton, Typography} from '@mui/material';
import React, {useContext} from 'react';
import {Settings} from '@mui/icons-material';
import {TimerContext} from '../../context/TimerContext';

export const Wrapper = ({children}) => {

  const {setSettingsOpen} = useContext(TimerContext);
  
  const onSettingsToggle = () => {
    setSettingsOpen((prev) => !prev);
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#1E213F',
        gap: 5,
        padding: {xs: '0 20px', sm: 0},
      }}
    >
      <Typography variant="h4" component="div" gutterBottom
        sx={{
          color: '#D7E0FF',
          textAlign: 'center',
          fontFamily: 'Kumbh Sans, sans-serif',
          fontSize: {xs: '24px', sm: '32px'},
          fontWeight: 700,
        }}
      >
        pomodoro
      </Typography>
      {children}
      <IconButton
      onClick={onSettingsToggle}
      >
        <Settings sx={{
          color: '#D7E0FF',
          opacity: 0.5,
          transition: 'opacity 0.3s',
          width: 34,
          height: 34,
          '&:hover': {
            opacity: 1,
          }
        }
        }
        />
      </IconButton>
    </Box>
  )
}