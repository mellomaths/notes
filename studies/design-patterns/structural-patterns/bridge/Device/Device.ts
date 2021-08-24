export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  changeVolume(percent: number): void;
  changeChannel(channel: number): void;
  volume(): number;
  channel(): number;
}
