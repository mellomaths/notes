import { Product } from "../Product/Product";

export abstract class OrderState {
  protected ESTIMATE_DAYS_TO_PROCESS: number = 1;
  protected ESTIMATE_DAYS_TO_SEND: number = 1;
  protected ESTIMATE_DAYS_TO_DELIVER: number = 5;

  abstract paid(): boolean;
  abstract reservedInStock(product: Product, amount: number): number;
  abstract daysToComplete(): number;
}
