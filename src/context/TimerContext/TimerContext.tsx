import { createContext, Dispatch, SetStateAction, useState } from 'react';
import type { PropsWithChildren } from 'react';

export const TimerContext = createContext<TimerContext>({} as TimerContext);

export enum ModeTimes {
  Pomodoro = 25 * 60,
  ShortBreak = 5 * 60,
  LongBreak = 10 * 60
}

export enum ModeLabels {
  Pomodoro = 'pomodoro',
  ShortBreak = 'shortBreak',
  LongBreak = 'longBreak'
}

export type TimerContext = {
  mode: ModeLabels;
  setMode: (mode: ModeLabels) => void;
  timeLeft: number;
  setTimeLeft: (time: number) => void;
  totalTime: number;
  setTotalTime: (time: number) => void;
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  settingsOpen: boolean;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
}

export const TimerProvider = ({ children }: PropsWithChildren<{}>) => {
  const [mode, setMode] = useState(ModeLabels.Pomodoro);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [totalTime, setTotalTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <TimerContext.Provider value={{ mode, setMode, timeLeft, setTimeLeft, totalTime, setTotalTime, isRunning, setIsRunning, settingsOpen, setSettingsOpen }}>
      {children}
    </TimerContext.Provider>
  );
}