import { Application } from "../Application";
import { Editor } from "../editor/Editor";

export abstract class Command {
  protected app: Application;
  protected editor: Editor;
  protected backup: string;

  constructor(app: Application, editor: Editor) {
    this.app = app;
    this.editor = editor;
    this.backup = "";
  }

  saveBackup() {
    this.backup = this.editor.text;
  }

  undo() {
    this.editor.text = this.backup;
  }

  abstract execute(): void;
}
