import { Discount } from "../Discount/Discount";
import { NoDiscount } from "../Discount/NoDiscount";

export class Item {
  private _name: string;
  private _value: number;
  private discount: Discount = new NoDiscount();

  constructor(name: string, value: number) {
    this._name = name;
    this._value = value;
  }

  name(): string {
    return this._name;
  }

  value(): number {
    return this._value;
  }

  setDiscount(discount: Discount): void {
    this.discount = discount;
  }

  priceForAmount(amount: number): number {
    return this.discount.apply(this._value) * amount;
  }
}
