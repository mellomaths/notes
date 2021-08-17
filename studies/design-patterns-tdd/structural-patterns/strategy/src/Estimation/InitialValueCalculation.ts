import { ParkingFeeCalculation } from "./ParkingFeeCalculation";

export class InitialValueCalculation implements ParkingFeeCalculation {
  private initialValue: number;
  private initialHours: number;
  private extraHourValue: number;

  constructor(
    initialValue: number,
    initialHours: number,
    extraHourValue: number
  ) {
    this.initialValue = initialValue;
    this.initialHours = initialHours;
    this.extraHourValue = extraHourValue;
  }

  calculateFee(hours: number): number {
    let value: number = this.initialValue;
    if (hours > this.initialHours) {
      value += (hours - this.initialHours) * this.extraHourValue;
    }
    return value;
  }
}
