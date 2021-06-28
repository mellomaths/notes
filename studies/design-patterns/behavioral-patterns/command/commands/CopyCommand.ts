import { Command } from "./Command";

export class CopyCommand extends Command {
  execute(): void {
    this.app.clipboard = this.editor.getSelection();
  }
}
