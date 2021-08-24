import { Product } from "../Product/Product";
import { OrderState } from "./OrderState";

export class PendingOrderState extends OrderState {
  paid(): boolean {
    return false;
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
