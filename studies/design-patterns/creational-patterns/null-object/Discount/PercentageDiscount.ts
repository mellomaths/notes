import { Discount } from "./Discount";

export class PercentageDiscount implements Discount {
  private percentage: number;

  constructor(percentage: number) {
    this.percentage = percentage;
  }

  apply(originalValue: number): number {
    const discount = (this.percentage / 100) * originalValue;
    return originalValue - discount;
  }
}
