import type { ChangeEvent } from "react";

export type TimeSettingsProps = {
  title: string;
  defaultValue: number;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
