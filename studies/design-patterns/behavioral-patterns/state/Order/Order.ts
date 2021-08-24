import { OrderState } from "../OrderState/OrderState";
import { PendingOrderState } from "../OrderState/PendingOrderState";
import { Product } from "../Product/Product";
import { OrderItem } from "./OrderItem";

export class Order {
  private _state: OrderState;
  private _items: OrderItem[];

  constructor() {
    this._state = new PendingOrderState();
    this._items = [];
  }

  total(): number {
    return this._items.reduce(
      (totalPrice, item) => totalPrice + item.product.price() * item.amount(),
      0
    );
  }

  items(): OrderItem[] {
    return this._items;
  }

  addOrderItem(product: Product, amount: number): void {
    this._items.push(new OrderItem(product, amount));
  }

  getOrderItemAmount(product: Product): number {
    const itemsFound = this._items.filter(
      (item) => product.id == item.product.id
    );

    if (itemsFound.length === 0) {
      return 0;
    }
    const item = itemsFound[0];
    return item.amount();
  }

  updateState(state: OrderState): void {
    this._state = state;
  }

  paid(): boolean {
    return this._state.paid();
  }

  reservedInStock(product: Product): number {
    const itemAmount = this.getOrderItemAmount(product);
    return this._state.reservedInStock(product, itemAmount);
  }

  daysToComplete() {
    return this._state.daysToComplete();
  }
}
