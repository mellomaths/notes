export class Button {
  commandCall: Function | null = null;

  setCommand(commandCall: Function) {
    this.commandCall = commandCall;
  }

  onClick(): void {
    if (this.commandCall !== null) {
      this.commandCall();
    }
  }
}
