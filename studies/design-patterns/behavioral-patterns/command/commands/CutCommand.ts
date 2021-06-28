import { Command } from "./Command";

export class CutCommand extends Command {
  execute(): void {
    this.saveBackup();
    this.app.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
  }
}
