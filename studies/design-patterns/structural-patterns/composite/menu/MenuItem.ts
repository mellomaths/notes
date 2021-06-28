import { Menu } from "./Menu";

export class MenuItem extends Menu {
  icon: string;
  document: string;

  constructor(text: string, icon: string, document: string) {
    super(text);
    this.icon = icon;
    this.document = document;
  }

  execute(): void {
    console.log(`Opening document: ${this.document}`);
  }
  draw(): void {
    console.log(`Drawing the Menu Item: ${this.text} with icon ${this.icon}`);
  }
}
