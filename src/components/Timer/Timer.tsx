import { useCallback, useContext, useMemo } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery, useTheme } from '@mui/material';

import { TimerContext, ThemeContext } from '../../context';
import { useStyles } from './Timer.styles';

export const Timer = () => {

  const theme = useTheme();
  const { themeColor, themeFont } = useContext(ThemeContext);

  const { classes } = useStyles({ themeFont, themeColor });

  const { formattedTimeLabel, circleProgress, isRunning, setIsRunning } = useContext(TimerContext);

  const onStartButtonClick = useCallback(() => {
    setIsRunning(!isRunning);
  }, [ isRunning, setIsRunning ]);

  const isXSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const countDownSize = useMemo(() => isXSmall ? 250 : 340, [ isXSmall ]);

  return (
    <Box className={classes.largeCircle}>
      <Box className={classes.mediumCircle}>
        <CircularProgress
          aria-label="Loading progress"
          className={classes.circularProgress}
          size={countDownSize}
          thickness={2}
          value={circleProgress || 0}
          variant="determinate"
        />

        <Typography
          variant="h1"
          className={classes.number}
        >
          {formattedTimeLabel}
        </Typography>

        <Typography
          className={classes.startButton}
          component="button"
          onClick={onStartButtonClick}
          variant="button"
        >
          {isRunning ? 'Pause' : 'Start'}
        </Typography>
      </Box>
    </Box>
  );
}
