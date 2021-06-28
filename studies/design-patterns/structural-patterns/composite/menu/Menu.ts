export abstract class Menu {
  text: string;
  abstract execute(): void;
  abstract draw(): void;

  constructor(text: string) {
    console.log(`Building the ${text} menu`);
    this.text = text;
  }

  add(menu: Menu): void {
    console.log(`Adding new child menu (${menu.text}) to menu ${this.text}`);
  }

  remove(menu: Menu): void {
    console.log(`Removing child menu (${menu.text}) from menu ${this.text}`);
  }

  getChild(menuId: number): Menu | null {
    return null;
  }
}
