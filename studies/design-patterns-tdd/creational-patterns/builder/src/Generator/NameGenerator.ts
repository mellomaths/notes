import { Honorific } from '../Honorific/Honorific';
import { NullHonorific } from '../Honorific/NullHonorific';

export class NameGenerator {

  private _honorific: Honorific = new NullHonorific();

  generate(base: string): string {
    let title = this.title();
    if (title) {
      title += " ";
    }

    let honorific = this.honorific().designate();
    if (honorific) {
      honorific += " ";
    }

    return `${honorific}${title}${base}`;
  }

  setHonorific(honorific: Honorific): void {
    this._honorific = honorific;
  }

  honorific(): Honorific {
    return this._honorific;
  }

  protected title(): string {
    return "";
  }

}