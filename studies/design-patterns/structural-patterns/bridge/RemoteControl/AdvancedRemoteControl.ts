import { RemoteControl } from "./RemoteControl";

export class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.changeVolume(0);
  }
}
