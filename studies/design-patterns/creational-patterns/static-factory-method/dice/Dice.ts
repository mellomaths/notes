import { RandomNumber } from "../utils/RandomNumber";

export class Dice {
  private randomNumber: RandomNumber;

  readonly size: number;

  constructor(size: number) {
    this.size = size;
    this.randomNumber = RandomNumber.between(1, 6);
  }

  roll(): number {
    return this.randomNumber.nextValue();
  }
}
