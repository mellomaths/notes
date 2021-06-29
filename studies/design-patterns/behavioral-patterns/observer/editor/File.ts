export class File {
  filename: string;
  path: string;

  constructor(path: string, filename: string) {
    this.path = path;
    this.filename = filename;
  }

  write() {
    console.log("Writing the File..");
  }
}
