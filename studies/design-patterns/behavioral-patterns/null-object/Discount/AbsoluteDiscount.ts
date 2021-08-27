import { Discount } from "./Discount";

export class AbsolutDiscount implements Discount {
  private discountValue: number;

  constructor(value: number) {
    this.discountValue = value;
  }

  apply(originalValue: number): number {
    const result = originalValue - this.discountValue;
    return result > 0 ? result : 0;
  }
}
