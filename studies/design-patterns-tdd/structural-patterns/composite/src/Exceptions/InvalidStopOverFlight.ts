export class InvalidStopOverFlight extends Error {
  constructor(reason: string) {
    super(reason);
  }
}
