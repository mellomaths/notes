import { Excellency } from '../Honorific/Excellency';
import { Honorific } from '../Honorific/Honorific';
import { HonorificComposite } from '../Honorific/HonorificComposite';
import { Magnificent } from '../Honorific/Magnificent';
import { NullHonorific } from '../Honorific/NullHonorific';
import { DoctorGenerator } from './DoctorGenerator';
import { MasterGenerator } from './MasterGenerator';
import { NameGenerator } from './NameGenerator';
import { NameGeneratorProxyLocation } from './NameGeneratorProxyLocation';

export class NameGeneratorBuilder {

  private nameGenerator: NameGenerator;

  private addHonorific(honorific: Honorific): void {
    if (this.nameGenerator.honorific() instanceof NullHonorific) {
      this.nameGenerator.setHonorific(honorific);
      return;
    }

    this.nameGenerator.setHonorific(
      new HonorificComposite(
        this.nameGenerator.honorific(),
        honorific,
      ),
    );
  }

  createPerson(): NameGeneratorBuilder {
    this.nameGenerator = new NameGenerator();
    return this
  }

  createMaster(): NameGeneratorBuilder {
    this.nameGenerator = new MasterGenerator();
    return this;
  }

  createDoctor(): NameGeneratorBuilder {
    this.nameGenerator = new DoctorGenerator();
    return this;
  }

  excellency(): NameGeneratorBuilder {
    this.addHonorific(new Excellency());
    return this;
  }

  magnificent(): NameGeneratorBuilder {
    this.addHonorific(new Magnificent());
    return this;
  }

  from(location: string): NameGeneratorBuilder {
    this.nameGenerator = new NameGeneratorProxyLocation(this.nameGenerator, location);
    return this;
  }

  build(): NameGenerator {
    return this.nameGenerator;
  }
}