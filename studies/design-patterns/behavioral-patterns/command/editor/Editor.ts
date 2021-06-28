export class Editor {
  text: string = "";

  getSelection(): string {
    console.log("Return selected text.");
    return "";
  }

  deleteSelection(): void {
    console.log("Delete selected text.");
  }

  replaceSelection(text: string) {
    console.log("Insert the clipboard's contents at the current position.");
  }
}
