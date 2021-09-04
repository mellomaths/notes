import { Honorific } from './Honorific';

export class HonorificComposite implements Honorific {

  private honorific1: Honorific;
  private honorific2: Honorific;

  constructor(honorific1: Honorific, honorific2: Honorific) {
    this.honorific1 = honorific1;
    this.honorific2 = honorific2;
  }

  designate(): string {
    const honor1 = this.honorific1.designate();
    const honor2 = this.honorific2.designate();
    return `${honor1} ${honor2}`;
  }

}