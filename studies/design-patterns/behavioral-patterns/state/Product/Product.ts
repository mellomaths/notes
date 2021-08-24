export class Product {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  id(): string {
    return this._id;
  }

  price(): number {
    return this._price;
  }
}
