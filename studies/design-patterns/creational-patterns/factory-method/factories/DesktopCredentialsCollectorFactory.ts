import { BiometricReader } from "../products/biometric/BiometricReader";
import { PasswordControl } from "../products/password/PasswordControl";
import { CredentialsCollectorFactory } from "./CredentialsCollectorFactory";

import { FacialRecognition } from "../products/biometric/FacialRecognition";
import { VirtualKeyboard } from "../products/password/VirtualKeyboard";

export class DesktopCredentialsCollectorFactory extends CredentialsCollectorFactory {
  public createBiometricReader(): BiometricReader {
    return new FacialRecognition();
  }
  public createPasswordControl(): PasswordControl {
    return new VirtualKeyboard();
  }
}
