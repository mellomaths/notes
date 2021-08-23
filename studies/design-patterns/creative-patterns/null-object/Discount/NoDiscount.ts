import { Discount } from "./Discount";

export class NoDiscount implements Discount {
  apply(originalValue: number): number {
    return originalValue;
  }
}
