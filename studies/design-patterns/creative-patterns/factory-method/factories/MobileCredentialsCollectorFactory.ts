import { BiometricReader } from "../products/biometric/BiometricReader";
import { PasswordControl } from "../products/password/PasswordControl";
import { CredentialsCollectorFactory } from "./CredentialsCollectorFactory";

import { FingerPrintReader } from "../products/biometric/FingerPrintReader";
import { PasswordTextBox } from "../products/password/PasswordTextBox";

export class MobileCredentialsCollectorFactory extends CredentialsCollectorFactory {
  public createBiometricReader(): BiometricReader {
    return new FingerPrintReader();
  }
  public createPasswordControl(): PasswordControl {
    return new PasswordTextBox();
  }
}
