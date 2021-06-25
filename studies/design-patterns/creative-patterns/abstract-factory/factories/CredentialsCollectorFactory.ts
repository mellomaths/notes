import { BiometricReader } from "../products/biometric/BiometricReader";
import { PasswordControl } from "../products/password/PasswordControl";

export abstract class CredentialsCollectorFactory {
  public abstract createBiometricReader(): BiometricReader;

  public abstract createPasswordControl(): PasswordControl;
}
