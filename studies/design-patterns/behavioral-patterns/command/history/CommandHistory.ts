import { Command } from "../commands/Command";

export class CommandHistory {
  private history: Array<Command> = [];

  insertCommand(command: Command) {
    this.history.push(command);
  }

  popMostRecentCommand(): Command | undefined {
    return this.history.pop();
  }
}
