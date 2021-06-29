import { Listener, Observer } from "../util/Observer";
import { Event } from "./Event";

export type EventType = "OPEN_FILE" | "SAVE_FILE";

export const EventTypeOptions = {
  OPEN_FILE: "OPEN_FILE" as EventType,
  SAVE_FILE: "SAVE_FILE" as EventType,
};

export class EventManager {
  private readonly events: Map<string, Observer<any>> = new Map();

  constructor() {
    Object.keys(EventTypeOptions).forEach((eventType) => {
      this.events.set(eventType, new Observer());
    });
  }

  notify(event: Event<any>) {
    const observer = this.events.get(event.type);
    if (!observer) {
      throw new Error("Event Type observers not implemented.");
    }

    observer.publish(event);
  }

  listen(eventType: EventType, listener: Listener<any>) {
    const observer = this.events.get(eventType);
    if (!observer) {
      throw new Error("Event Type observers not implemented.");
    }

    observer.subscribe(listener);
  }
}
