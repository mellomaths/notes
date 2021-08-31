export class User {
  private readonly _name: string;
  private readonly permissions: string[];

  constructor(name: string) {
    this._name = name;
    this.permissions = [];
  }

  name(): string {
    return this._name;
  }

  authorize(className: string, method: string): void {
    this.permissions.push(`${className}:${method}`);
  }

  hasPermission(className: string, method: string): boolean {
    return this.permissions.includes(`${className}:${method}`);
  }
}
