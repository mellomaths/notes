import { Menu } from "./Menu";

export class MenuTab extends Menu {
  private readonly subMenusList: Array<Menu | null> = [];

  execute(): void {
    console.log("Opening sub menu to see the sub menu list.");
  }

  draw(): void {
    this.subMenusList.forEach((menu) => {
      if (!menu) {
        return;
      }

      menu.draw();
    });
  }

  add(menu: Menu): void {
    console.log(`Adding new child menu (${menu.text}) to menu ${this.text}`);
    this.subMenusList.push(menu);
  }

  remove(menu: Menu): void {
    console.log(`Removing child menu (${menu.text}) from menu ${this.text}`);
    const menuId = this.subMenusList.findIndex((m) => {
      if (m) return m.text === menu.text;
    });
    if (menuId < 0) {
      return;
    }

    this.subMenusList[menuId] = null;
  }

  getChild(menuId: number): Menu | null {
    if (menuId >= this.subMenusList.length) {
      return null;
    }

    return this.subMenusList[menuId];
  }
}
