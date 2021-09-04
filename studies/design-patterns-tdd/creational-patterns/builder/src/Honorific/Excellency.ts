import { Honorific } from './Honorific';

export class Excellency implements Honorific {
  designate(): string {
    return "Excellency";
  }
}