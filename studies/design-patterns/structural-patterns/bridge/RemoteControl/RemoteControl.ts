import { Device } from "../Device/Device";

export class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      return this.device.disable();
    }

    return this.device.enable();
  }

  volumeDown(): void {
    this.device.changeVolume(this.device.channel() - 10);
  }

  volumeUp(): void {
    this.device.changeVolume(this.device.channel() + 10);
  }

  channelDown(): void {
    this.device.changeChannel(this.device.channel() - 1);
  }

  channelUp(): void {
    this.device.changeChannel(this.device.channel() + 1);
  }
}
