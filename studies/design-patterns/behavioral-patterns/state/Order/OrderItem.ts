import { Product } from "../Product/Product";

export class OrderItem {
  public readonly product: Product;
  private _amount: number;

  constructor(product: Product, amount: number) {
    this.product = product;
    this._amount = amount;
  }

  amount(): number {
    return this._amount;
  }
}
