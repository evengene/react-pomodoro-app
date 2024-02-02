import { createContext, useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { TimerContextType } from './TimerContext.types';
import { ModeLabels } from './TimerContext.enumerations';
import { FIVE_MINUTES, TEN_MINUTES, TWENTY_FIVE_MINUTES } from "./TimerContext.constants";

export const TimerContext = createContext<TimerContextType>({} as TimerContextType);

export const TimerProvider = ({ children }: PropsWithChildren<{}>) => {
  const [ mode, setMode ] = useState(ModeLabels.Pomodoro);
  const [ modeDurationInSeconds, setModeDurationInSeconds ] = useState({
    [ModeLabels.Pomodoro]: TWENTY_FIVE_MINUTES,
    [ModeLabels.ShortBreak]: FIVE_MINUTES,
    [ModeLabels.LongBreak]: TEN_MINUTES,
  });
  const [ initialTimerValue, setInitialTimerValue ] = useState(modeDurationInSeconds[mode]);
  const [ remainingTimerValue, setRemainingTimerValue ] = useState(modeDurationInSeconds[mode]);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ settingsOpen, setSettingsOpen ] = useState(false);

  const minutesLeft = Math.floor(initialTimerValue / 60);
  const secondsLeft = initialTimerValue % 60;
  const secondsLabel = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  const formattedTimeLabel = `${minutesLeft}:${secondsLabel}`;

  const circleProgress = useMemo(() => (initialTimerValue / remainingTimerValue) * 100, [ initialTimerValue, remainingTimerValue ]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning && initialTimerValue > 0) {
      timer = setInterval(() => {
        setInitialTimerValue(initialTimerValue - 1);
      }, 1000);
    } else if (!isRunning && timer) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [ initialTimerValue, setInitialTimerValue, isRunning ]);

  // listen if modeDurationInSeconds changes and update initialTimerValue and remainingTimerValue
  useEffect(() => {
    setInitialTimerValue(modeDurationInSeconds[mode]);
    setRemainingTimerValue(modeDurationInSeconds[mode]);
  }, [ mode, modeDurationInSeconds ]);

  return (
    <TimerContext.Provider value={{
      circleProgress,
      formattedTimeLabel,
      initialTimerValue,
      isRunning,
      mode,
      setInitialTimerValue,
      setIsRunning,
      setMode,
      setRemainingTimerValue,
      setSettingsOpen,
      settingsOpen,
      modeDurationInSeconds,
      setModeDurationInSeconds,
    }}>
      {children}
    </TimerContext.Provider>
  );
}
