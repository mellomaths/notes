import { Event } from "../events/Event";
import { Listener } from "../util/Observer";

export class EmailAlertListener implements Listener<any> {
  execute(event: Event<any>): void {
    console.log(`Sending email after event ${JSON.stringify(event)}`);
  }
}
