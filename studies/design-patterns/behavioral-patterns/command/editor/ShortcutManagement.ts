export class ShortcutManagement {
  private readonly mapping: Map<string, Function> = new Map();

  onKeyPress(key: string, callback: Function) {
    this.mapping.set(key, callback);
  }
}
