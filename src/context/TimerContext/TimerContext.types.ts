import type { Dispatch, SetStateAction } from 'react';
import { ModeLabels } from './TimerContext.enumerations';

export type TimerContextType = {
  progressValuePercentage: number | null;
  formattedTimeLabel: string;
  ongoingTimeInSeconds: number;
  isRunning: boolean;
  mode: ModeLabels;
  modeDurationInSeconds: { [key in ModeLabels]: number };
  setInitialTimerValue: (time: number) => void;
  setIsRunning: (isRunning: boolean) => void;
  setMode: (mode: ModeLabels) => void;
  setRemainingTimerValue: (time: number) => void;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  settingsOpen: boolean;
  isFinished: boolean;
  resetTimer: () => void;
  setModeDuration: (modeLabel: ModeLabels, value: number) => void;
}
