import { Device } from "./Device";

export class Radio implements Device {
  private _isEnabled: boolean;
  private _volume: number;
  private currentChannel: number;

  constructor() {
    this._isEnabled = false;
    this._volume = 30;
    this.currentChannel = 0;
  }

  isEnabled(): boolean {
    const status = this._isEnabled ? "on" : "off";
    console.log(`The Radio is ${status}.`);
    return this._isEnabled;
  }

  enable(): void {
    console.log("Turning on the Radio");
    this._isEnabled = true;
  }

  disable(): void {
    console.log("Turning off the Radio");
    this._isEnabled = false;
  }

  changeVolume(percent: number): void {
    console.log(`Changing Radio volume to ${percent}`);
    this._volume = percent;
  }

  changeChannel(channel: number): void {
    console.log(`Changing Radio channel to ${channel}`);
    this.currentChannel = channel;
  }

  volume(): number {
    return this._volume;
  }

  channel(): number {
    return this.currentChannel;
  }
}
