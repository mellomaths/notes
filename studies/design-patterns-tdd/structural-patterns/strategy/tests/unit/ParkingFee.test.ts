import { DailyCalculation } from "../../src/Estimation/DailyCalculation";
import { FixedHourCalculation } from "../../src/Estimation/FixedHourCalculation";
import { InitialValueCalculation } from "../../src/Estimation/InitialValueCalculation";
import { ParkingFeeCalculation } from "../../src/Estimation/ParkingFeeCalculation";
import { ParkingFee } from "../../src/Parking/ParkingFee";

describe("ParkingFee", () => {
  describe("FixedHourCalculation", () => {
    it("should calculate parking fee with fixed hour price", () => {
      const p: ParkingFee = new ParkingFee(3, new FixedHourCalculation(4));
      const value: number = p.value();
      expect(value).toEqual(12);
    });
  });

  describe("InitialValueCalculation", () => {
    it("should calculate parking fee with inital value and extra hours", () => {
      const p: ParkingFee = new ParkingFee(
        5,
        new InitialValueCalculation(5, 3, 2)
      );
      const value: number = p.value();
      expect(value).toEqual(9);
    });

    it("should calculate parking fee with inital value within hour limit", () => {
      const p: ParkingFee = new ParkingFee(
        2,
        new InitialValueCalculation(5, 3, 2)
      );
      const value: number = p.value();
      expect(value).toEqual(5);
    });
  });

  describe("DailyCalculation", () => {
    it("should calculate parking fee daily price", () => {
      const p: ParkingFee = new ParkingFee(50, new DailyCalculation(20));
      const value: number = p.value();
      expect(value).toEqual(60);
    });

    it("should calculate parking fee daily price for less than a day", () => {
      const p: ParkingFee = new ParkingFee(10, new DailyCalculation(20));
      const value: number = p.value();
      expect(value).toEqual(20);
    });
  });
});
