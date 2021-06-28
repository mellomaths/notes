import { JobDecorator } from "./JobDecorator";

export class JobWithEmailAlert extends JobDecorator {
  execute(): void {
    this.job.execute();
    console.log("Sending an Email after Job completion.");
  }
}
