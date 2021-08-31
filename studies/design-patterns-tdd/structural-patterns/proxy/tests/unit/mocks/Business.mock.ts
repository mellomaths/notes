import { Business } from "../../../src/Business/Business";

export class BusinessMock implements Business {
  private accessed: boolean = false;

  executeTransaction(): void {
    this.accessed = true;
  }
  cancelTransaction(): void {
    this.accessed = true;
  }

  wasAccessed(): boolean {
    return this.accessed;
  }
}
