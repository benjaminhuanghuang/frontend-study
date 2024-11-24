const eventName = ["API:UN_AUTH", "API_INVALID"];

type EventName = (typeof eventName)[number];

class EventEmitter {
  private listeners: Record<string, Set<Function>> = {
    "API:UN_AUTH": new Set(),
    API_INVALID: new Set(),
  };

  on(event, listener) {
    this.listeners[event].add(listener);
  }

  emit(eventName: EventName, ...args: any[]) {
    if (!this.listeners[eventName]) {
      return;
    }

    this.listeners[eventName].forEach((listener) => {
      listener(...args);
    });
  }
}

export default new EventEmitter();


