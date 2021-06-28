import { Command } from "./Command";

export class PasteCommand extends Command {
  execute(): void {
    this.saveBackup();
    this.editor.replaceSelection(this.app.clipboard);
  }
}
