import { InvalidStopOverFlight } from "../Exceptions/InvalidStopOverFlight";
import { Flight } from "./Flight";

export class StopOverFlight implements Flight {
  private firstFlight: Flight;
  private secondFlight: Flight;

  constructor(firstFlight: Flight, secondFlight: Flight) {
    if (firstFlight.destiny() !== secondFlight.origin()) {
      throw new InvalidStopOverFlight(
        "First flight destiny should be equal to second flight origin"
      );
    }

    this.firstFlight = firstFlight;
    this.secondFlight = secondFlight;
  }

  origin(): string {
    return this.firstFlight.origin();
  }
  destiny(): string {
    return this.secondFlight.destiny();
  }
  cost(): number {
    return this.firstFlight.cost() + this.secondFlight.cost();
  }
  distance(): number {
    return this.firstFlight.distance() + this.secondFlight.distance();
  }
}
