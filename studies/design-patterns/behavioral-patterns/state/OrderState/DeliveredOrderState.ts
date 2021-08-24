import { Product } from "../Product/Product";
import { OrderState } from "./OrderState";

export class DeliveredOrderState extends OrderState {
  paid(): boolean {
    return true;
  }

  reservedInStock(product: Product, amount: number): number {
    return 0;
  }

  daysToComplete(): number {
    return 0;
  }
}
