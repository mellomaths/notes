import { NameGenerator } from '../../src/Generator/NameGenerator';
import { NameGeneratorBuilder } from '../../src/Generator/NameGeneratorBuilder';

describe('NameGenerator', () => {
  it('should generate a common name', () => {
    const g: NameGenerator = new NameGeneratorBuilder().createPerson().build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Eduardo");
  });

  it('should generate a name with master title', () => {
    const g: NameGenerator = new NameGeneratorBuilder().createMaster().build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Master Eduardo");
  });

  it('should generate a name with doctor title', () => {
    const g: NameGenerator = new NameGeneratorBuilder().createDoctor().build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Doctor Eduardo");
  });

  it('should generate a name with excellency doctor title', () => {
    const g: NameGenerator = new NameGeneratorBuilder().createDoctor().excellency().build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Excellency Doctor Eduardo");
  });

  it('should generate a name with magnificent master title', () => {
    const g: NameGenerator = new NameGeneratorBuilder().createMaster().magnificent().build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Magnificent Master Eduardo");
  });

  it('should generate a name with excellency magnificent doctor title', () => {
    const g: NameGenerator = new NameGeneratorBuilder().createDoctor().excellency().magnificent().build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Excellency Magnificent Doctor Eduardo");
  });

  it('should generate a person from a city', () => {
    const g: NameGenerator = new NameGeneratorBuilder().createPerson().from("Rio de Janeiro").build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Eduardo from Rio de Janeiro");
  });

  it('should generate a excellency magnificent doctor from a city from a country', () => {
    const g: NameGenerator = new NameGeneratorBuilder()
      .createDoctor()
      .excellency()
      .magnificent()
      .from("Rio de Janeiro")
      .from("Brazil")
      .build();
    const name: string = g.generate("Eduardo");
    expect(name).toEqual("Excellency Magnificent Doctor Eduardo from Rio de Janeiro from Brazil");
  });

});