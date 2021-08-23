import { BiometricReader } from "./BiometricReader";

export class FingerPrintReader extends BiometricReader {
  constructor() {
    super();

    console.log("Initializing the Finger Print Reader module...");
  }
}
