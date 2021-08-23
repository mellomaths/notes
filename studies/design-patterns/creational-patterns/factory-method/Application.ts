import { CredentialsCollectorFactory } from "./factories/CredentialsCollectorFactory";
import { DesktopCredentialsCollectorFactory } from "./factories/DesktopCredentialsCollectorFactory";
import { MobileCredentialsCollectorFactory } from "./factories/MobileCredentialsCollectorFactory";
import { BiometricReader } from "./products/biometric/BiometricReader";
import { PasswordControl } from "./products/password/PasswordControl";

export abstract class Application {
  private passwordControl: PasswordControl;

  private biometricReader: BiometricReader;

  protected abstract buildCredentialsCollector(): CredentialsCollectorFactory;

  constructor() {
    console.log("Bootstraping the application...");

    let credentialsCollectorFactory: CredentialsCollectorFactory =
      this.buildCredentialsCollector();

    this.passwordControl = credentialsCollectorFactory.createPasswordControl();
    this.biometricReader = credentialsCollectorFactory.createBiometricReader();
    console.log("Application started.");
  }
}
