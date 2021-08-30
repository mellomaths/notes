import { Flight } from "./Flight";
import { StopOverFlight } from "./StopOverFlight";

export class ConnectionFlight extends StopOverFlight {
  private _connectionFee: number;

  constructor(firstFlight: Flight, secondFlight: Flight, fee: number) {
    super(firstFlight, secondFlight);
    this._connectionFee = fee;
  }

  connectionFee(): number {
    return this._connectionFee;
  }

  cost(): number {
    return super.cost() + this._connectionFee;
  }
}
