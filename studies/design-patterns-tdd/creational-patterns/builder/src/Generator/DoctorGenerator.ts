import { NameGenerator } from './NameGenerator';

export class DoctorGenerator extends NameGenerator {

  
  protected title(): string {
    return "Doctor";
  }

}