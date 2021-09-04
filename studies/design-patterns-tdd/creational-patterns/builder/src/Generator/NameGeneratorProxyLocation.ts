import { Honorific } from '../Honorific/Honorific';
import { NameGenerator } from './NameGenerator';

export class NameGeneratorProxyLocation extends NameGenerator {

  private nameGenerator: NameGenerator;
  private location: string;

  constructor(nameGenerator: NameGenerator, location: string) {
    super();
    this.nameGenerator = nameGenerator;
    this.location = location;
  }

  setHonorific(honorific: Honorific): void {
    this.nameGenerator.setHonorific(honorific);
  }

  honorific(): Honorific {
    return this.nameGenerator.honorific();
  }

  generate(base: string): string {
    const name = this.nameGenerator.generate(base);
    return `${name} from ${this.location}`;
  }

}