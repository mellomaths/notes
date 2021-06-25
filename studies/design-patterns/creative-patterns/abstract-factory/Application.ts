import { CredentialsCollectorFactory } from "./factories/CredentialsCollectorFactory";
import { DesktopCredentialsCollectorFactory } from "./factories/DesktopCredentialsCollectorFactory";
import { MobileCredentialsCollectorFactory } from "./factories/MobileCredentialsCollectorFactory";
import { BiometricReader } from "./products/biometric/BiometricReader";
import { PasswordControl } from "./products/password/PasswordControl";

export class Application {
  private passwordControl: PasswordControl;

  private biometricReader: BiometricReader;

  constructor(platform: string) {
    console.log(
      `Setting and bootstraping the application for ${platform} platform`
    );
    console.log("Loading dependencies...");

    var credentialsCollectorFactory: CredentialsCollectorFactory;
    if (platform === "DESKTOP") {
      credentialsCollectorFactory = new DesktopCredentialsCollectorFactory();
    } else {
      credentialsCollectorFactory = new MobileCredentialsCollectorFactory();
    }

    this.passwordControl = credentialsCollectorFactory.createPasswordControl();
    this.biometricReader = credentialsCollectorFactory.createBiometricReader();
    console.log("Application started.");
  }
}
