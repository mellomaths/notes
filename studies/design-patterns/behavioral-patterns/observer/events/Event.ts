import { EventType } from "./EventManager";

export class Event<T> {
  type: EventType;
  payload: T;

  constructor(type: EventType, payload: T) {
    this.type = type;
    this.payload = payload;
  }
}
