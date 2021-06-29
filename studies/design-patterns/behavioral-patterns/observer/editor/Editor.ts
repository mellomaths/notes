import { Event } from "../events/Event";
import { EventManager, EventTypeOptions } from "../events/EventManager";
import { File } from "./File";

export class Editor {
  private file: File | null = null;
  readonly events = new EventManager();

  openFile(path: string): void {
    this.file = new File(path, "File to open");
    this.events.notify(new Event<File>(EventTypeOptions.OPEN_FILE, this.file));
  }

  saveFile() {
    if (this.file) {
      this.file.write();
      this.events.notify(
        new Event<File>(EventTypeOptions.SAVE_FILE, this.file)
      );
    }
  }
}
