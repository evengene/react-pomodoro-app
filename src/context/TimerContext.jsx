import {createContext, useState} from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({children}) => {
  const [mode, setMode] = useState('pomodoro');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [totalTime, setTotalTime] = useState(25 * 60); // Add this line
  const [isRunning, setIsRunning] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <TimerContext.Provider value={{ mode, setMode, timeLeft, setTimeLeft, totalTime, setTotalTime, isRunning, setIsRunning, settingsOpen, setSettingsOpen }}>
      {children}
    </TimerContext.Provider>
  );
}