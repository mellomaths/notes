import { Command } from "./commands/Command";
import { CopyCommand } from "./commands/CopyCommand";
import { CutCommand } from "./commands/CutCommand";
import { PasteCommand } from "./commands/PasteCommand";
import { UndoCommand } from "./commands/UndoCommand";
import { Button } from "./editor/Button";
import { Editor } from "./editor/Editor";
import { ShortcutManagement } from "./editor/ShortcutManagement";
import { CommandHistory } from "./history/CommandHistory";

export class Application {
  clipboard: string;
  editors: Array<Editor>;
  activeEditor: Editor;
  history: CommandHistory;
  shortcuts: ShortcutManagement;
  buttons: Map<string, Button>;

  constructor() {
    this.clipboard = "";
    this.editors = [];
    this.activeEditor = new Editor();
    this.history = new CommandHistory();
    this.shortcuts = new ShortcutManagement();
    this.buttons = new Map();
  }

  createUI(): void {
    this.setCommandWithButtonAndShortcut(
      new CopyCommand(this, this.activeEditor),
      "copy",
      "Ctrl+C"
    );

    this.setCommandWithButtonAndShortcut(
      new CutCommand(this, this.activeEditor),
      "cut",
      "Ctrl+X"
    );

    this.setCommandWithButtonAndShortcut(
      new PasteCommand(this, this.activeEditor),
      "paste",
      "Ctrl+V"
    );

    this.setCommandWithButtonAndShortcut(
      new UndoCommand(this, this.activeEditor),
      "undo",
      "Ctrl+Z"
    );
  }

  executeCommand(command: Command) {
    command.execute();
    this.history.insertCommand(command);
  }

  undo(): void {
    const lastCommand = this.history.popMostRecentCommand();
    if (lastCommand) {
      lastCommand.undo();
    }
  }

  private setCommandWithButtonAndShortcut(
    command: Command,
    buttonName: string,
    shortcutKey: string
  ): void {
    const btn = new Button();
    const callback = () => {
      this.executeCommand(command);
    };

    btn.setCommand(callback);
    this.shortcuts.onKeyPress(shortcutKey, callback);
    this.buttons.set(buttonName, btn);
  }
}
