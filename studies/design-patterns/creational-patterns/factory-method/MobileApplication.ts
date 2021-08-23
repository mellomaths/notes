import { Application } from "./Application";
import { CredentialsCollectorFactory } from "./factories/CredentialsCollectorFactory";
import { MobileCredentialsCollectorFactory } from "./factories/MobileCredentialsCollectorFactory";

export class MobileApplication extends Application {
  constructor() {
    console.log("Starting the Mobile Application...");
    super();
  }

  protected buildCredentialsCollector(): CredentialsCollectorFactory {
    return new MobileCredentialsCollectorFactory();
  }
}
