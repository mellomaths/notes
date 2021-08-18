export class RandomNumber {
  private min: number;
  private max: number;

  private constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  static between(min: number, max: number): RandomNumber {
    return new RandomNumber(min, max);
  }

  static smallerThan(max: number): RandomNumber {
    return new RandomNumber(Number.MIN_SAFE_INTEGER, max);
  }

  static smallerThanPositiveOnly(max: number): RandomNumber {
    return new RandomNumber(0, max);
  }

  static greaterThan(min: number): RandomNumber {
    return new RandomNumber(min, Number.MAX_SAFE_INTEGER);
  }

  nextValue(): number {
    const { min, max } = this;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
