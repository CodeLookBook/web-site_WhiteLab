import {Colleague} from "./Colleague";

abstract class Mediator<T> {

    public abstract send(eventName: T, colleague: Colleague<T>): void;
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {Mediator};