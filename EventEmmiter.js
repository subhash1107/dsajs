class EventEmitter {
    constructor() {
        this.events = new Map()
    }
    on(eventName, callback) {
        // implementation
        if (!this.events.has(eventName)) this.events.set(eventName, [])
        this.events.get(eventName).push({callback,once:false})
    }

    once(eventName, callback) {
        // implementation
        if (!this.events.has(eventName)) this.events.set(eventName, [])
        this.events.get(eventName).push({ callback, once: true })
    }

    off(eventName, callback) {
        // implementation
        if (!this.events.get(eventName)) return
        const filtered = this.events.get(eventName).filter(l => l.callback !== callback)
        this.events.set(eventName,filtered)
    }

    emit(eventName, ...args) {
        // implementation
        if (!this.events.has(eventName)) return;
        const listeners = this.events.get(eventName);
        const remaining = [];
        for (const listener of listeners) {
            listener.callback(...args);
            if (!listener.once) remaining.push(listener);
        }
        this.events.set(eventName,remaining)
    }
}