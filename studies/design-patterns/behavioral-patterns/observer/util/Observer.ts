import { Event } from "../events/Event";

export interface Listener<EventType> {
  execute(event: Event<EventType>): void;
}

export class Observer<EventType> {
  protected listeners: Array<Listener<EventType>> = [];

  subscribe(listener: Listener<EventType>) {
    console.log("Adding new subscriber.");
    this.listeners.push(listener);
  }

  publish(event: Event<EventType>) {
    console.log("Publishing event");
    this.listeners.forEach((listener) => {
      listener.execute(event);
    });
  }
}
