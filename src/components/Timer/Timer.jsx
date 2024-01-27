import {useContext, useEffect, useMemo} from 'react';
import {TimerContext} from '../../context/TimerContext';
import {Box, CircularProgress, styled, Typography, useMediaQuery, useTheme} from '@mui/material';
import {ThemeContext} from '../../context/ThemeContext';

export const Timer = () => {

  const {timeLeft, setTimeLeft, isRunning, setIsRunning, totalTime} = useContext(TimerContext);
  const { themeColor, themeFont } = useContext(ThemeContext);

  const CountdownCircle = styled(CircularProgress)(() => ({
    color: themeColor,
    position: 'absolute',
    zIndex: 1,
  }));


  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Update the timer every second
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) { // is it's running and time is positive
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (!isRunning && timer) {
      clearInterval(timer);
    }

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, isRunning]);

  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;


  const onButtonClick = () => {
    setIsRunning(!isRunning);
  }

  const progress = (timeLeft / totalTime) * 100;

  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const countDownSize = useMemo(() => {
    if (isXSmall) {
      return 248;
    } else {
      return 340;
    }
  }, [isXSmall]);

  return (
    <Box
      sx={{
        borderRadius: '410px',
        background: 'linear-gradient(315deg, #2E325A 0%, #0E112A 100%)',
        boxShadow: '50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A',
        width: {xs: 300, sm: 410},
        height: {xs: 300, sm: 410},
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          borderRadius: '366px',
          background: '#161932',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: {xs: 267, sm: 340},
          height: {xs: 267, sm: 340},
          position: 'relative',
        }}
      >
        <CountdownCircle variant="determinate" value={progress} size={countDownSize} thickness={2}/>

        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            color: '#D7E0FF',
            textAlign: 'center',
            fontFamily: themeFont,
            fontSize: {xs: '80px', sm: '100px'},
            fontWeight: 700,
            letterSpacing: {xs: '-4px', sm: '-5px'},
          }}
        >
          {formattedTime}
        </Typography>

        <Typography
          variant="button"
          component="button"
          onClick={onButtonClick}
          sx={{
            color: '#D7E0FF',
            cursor: 'pointer',
            fontSize: {xs: '14px', sm: '16px'},
            fontWeight: 700,
            letterSpacing: {xs: '13.125px', sm: '15px'},
            position: 'absolute',
            bottom: {xs: 60, sm: 75},
            zIndex: 2,
            background: 'transparent',
            border: 'none',
            fontFamily: themeFont,
          }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Typography>
      </Box>
    </Box>
  );
}