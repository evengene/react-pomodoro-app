import { Dispatch, SetStateAction } from 'react';
import type { ModeLabels } from './TimerContext.enumerations';

export type TimerContextType = {
  circleProgress: number | null;
  formattedTimeLabel: string;
  initialTimerValue: number;
  isRunning: boolean;
  mode: ModeLabels;
  modeDurationInSeconds: { [key in ModeLabels]: number };
  setInitialTimerValue: (time: number) => void;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setMode: (mode: ModeLabels) => void;
  setModeDurationInSeconds: Dispatch<SetStateAction<{ [key in ModeLabels]: number }>>;
  setRemainingTimerValue: (time: number) => void;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  settingsOpen: boolean;
}
