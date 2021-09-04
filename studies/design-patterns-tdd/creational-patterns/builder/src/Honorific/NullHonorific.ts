import { Honorific } from './Honorific';

export class NullHonorific implements Honorific {
  designate(): string {
    return "";
  }
  
}