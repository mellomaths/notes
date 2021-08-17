import { ParkingFeeCalculation } from "../Estimation/ParkingFeeCalculation";

export class ParkingFee {
  private hours: number;
  private calculation: ParkingFeeCalculation;

  constructor(hours: number, estimation: ParkingFeeCalculation) {
    this.hours = hours;
    this.calculation = estimation;
  }

  value(): number {
    return this.calculation.calculateFee(this.hours);
  }
}
