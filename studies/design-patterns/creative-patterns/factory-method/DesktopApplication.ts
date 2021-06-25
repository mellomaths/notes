import { Application } from "./Application";
import { CredentialsCollectorFactory } from "./factories/CredentialsCollectorFactory";
import { DesktopCredentialsCollectorFactory } from "./factories/DesktopCredentialsCollectorFactory";

export class DesktopApplication extends Application {
  constructor() {
    console.log("Starting the Desktop Application...");
    super();
  }

  protected buildCredentialsCollector(): CredentialsCollectorFactory {
    return new DesktopCredentialsCollectorFactory();
  }
}
