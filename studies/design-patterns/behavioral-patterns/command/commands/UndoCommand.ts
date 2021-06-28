import { Command } from "./Command";

export class UndoCommand extends Command {
  execute(): void {
    this.app.undo();
  }
}
