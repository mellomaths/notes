import { Event } from "../events/Event";
import { Listener } from "../util/Observer";

export class LoggingListener implements Listener<any> {
  execute(event: Event<any>): void {
    console.log(
      `Received an event with type=${event.type} and payload ${JSON.stringify(
        event
      )}`
    );
  }
}
