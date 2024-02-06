import { createContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

import type { TimerContextType } from './TimerContext.types';
import { useTimer } from '../../hooks/useTimer';
import { useDocumentTitle } from '../../hooks/useDocumenrTitle';

export const TimerContext = createContext<TimerContextType>({} as TimerContextType);

export const TimerProvider = ({ children }: PropsWithChildren<{}>) => {
  const {
    mode,
    modeDurationInSeconds,
    ongoingTimeInSeconds,
    isRunning,
    isFinished,
    setMode,
    setIsRunning,
    resetTimer,
    setSettingsOpen,
    settingsOpen,
    setModeDuration,
  } = useTimer();

  const minutesLeft = Math.floor(ongoingTimeInSeconds / 60);
  const secondsLeft = ongoingTimeInSeconds % 60;
  const secondsLabel = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  const formattedTimeLabel = `${minutesLeft}:${secondsLabel}`;

  const progressValuePercentage = useMemo(() => (ongoingTimeInSeconds / modeDurationInSeconds[mode]) * 100, [ ongoingTimeInSeconds, modeDurationInSeconds, mode ]);

  useDocumentTitle(isRunning ? `(${formattedTimeLabel})Timer` : isFinished ? 'Finished!' : 'Timer');

  return (
    <TimerContext.Provider value={{
      progressValuePercentage,
      formattedTimeLabel,
      ongoingTimeInSeconds,
      isRunning,
      mode,
      setSettingsOpen,
      settingsOpen,
      setInitialTimerValue: resetTimer,
      setIsRunning,
      setMode,
      setRemainingTimerValue: resetTimer,
      modeDurationInSeconds,
      isFinished,
      resetTimer,
      setModeDuration,
    }}>
      {children}
    </TimerContext.Provider>
  );
}