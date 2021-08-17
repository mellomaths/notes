import { ParkingFeeCalculation } from "./ParkingFeeCalculation";

export class DailyCalculation implements ParkingFeeCalculation {
  private dailyPrice: number;

  constructor(dailyPrice: number) {
    this.dailyPrice = dailyPrice;
  }

  calculateFee(hours: number): number {
    return this.dailyPrice * Math.ceil(hours / 24);
  }
}
