import { Flight } from "./Flight";

export class SimpleFlight implements Flight {
  private _origin: string;
  private _destiny: string;
  private _cost: number;
  private _distance: number;

  constructor(origin: string, destiny: string, cost: number, distance: number) {
    this._origin = origin;
    this._destiny = destiny;
    this._cost = cost;
    this._distance = distance;
  }

  origin(): string {
    return this._origin;
  }
  destiny(): string {
    return this._destiny;
  }
  cost(): number {
    return this._cost;
  }
  distance(): number {
    return this._distance;
  }
}
