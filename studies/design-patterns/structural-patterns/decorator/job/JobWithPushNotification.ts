import { JobDecorator } from "./JobDecorator";

export class JobWithPushNotification extends JobDecorator {
  execute(): void {
    this.job.execute();
    console.log("Sending a Push Notification after Job completion.");
  }
}
