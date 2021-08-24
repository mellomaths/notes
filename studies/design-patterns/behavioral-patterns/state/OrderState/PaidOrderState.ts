import { Product } from "../Product/Product";
import { OrderState } from "./OrderState";

export class PaidOrderState extends OrderState {
  paid(): boolean {
    return true;
  }

  reservedInStock(product: Product, amount: number): number {
    return amount;
  }

  daysToComplete(): number {
    return (
      this.ESTIMATE_DAYS_TO_PROCESS +
      this.ESTIMATE_DAYS_TO_SEND +
      this.ESTIMATE_DAYS_TO_DELIVER
    );
  }
}
