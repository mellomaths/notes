import { Editor } from "./editor/Editor";
import { EmailAlertListener } from "./editor/EmailAlertListener";
import { LoggingListener } from "./editor/LoggingListener";

export class Application {
  readonly editor = new Editor();
  readonly listeners = {
    logger: new LoggingListener(),
    emailAlert: new EmailAlertListener(),
  };

  constructor() {
    this.config();
  }

  config() {
    this.editor.events.listen("OPEN_FILE", this.listeners.logger);
    this.editor.events.listen("SAVE_FILE", this.listeners.logger);
    this.editor.events.listen("SAVE_FILE", this.listeners.emailAlert);
  }
}
