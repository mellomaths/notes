import { ParkingFeeCalculation } from "./ParkingFeeCalculation";

export class FixedHourCalculation implements ParkingFeeCalculation {
  private hourPrice: number;

  constructor(hourPrice: number) {
    this.hourPrice = hourPrice;
  }

  calculateFee(hours: number): number {
    return hours * this.hourPrice;
  }
}
