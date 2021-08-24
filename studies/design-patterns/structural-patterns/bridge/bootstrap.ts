import { Radio } from "./Device/Radio";
import { Television } from "./Device/Television";
import { AdvancedRemoteControl } from "./RemoteControl/AdvancedRemoteControl";
import { RemoteControl } from "./RemoteControl/RemoteControl";

const tv: Television = new Television();
const remoteControl: RemoteControl = new RemoteControl(tv);
remoteControl.togglePower();

const radio: Radio = new Radio();
const advancedRemoteControl: AdvancedRemoteControl = new AdvancedRemoteControl(
  radio
);
advancedRemoteControl.mute();
