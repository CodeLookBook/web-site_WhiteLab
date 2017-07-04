import {IEventHandlerType} from "./IEventHandlerType";
import {Observers} from "../global-classes/types/Observers";

// ----------------------------------------------------------------------------
// Type of the 'state' property in ObservableState<T> class.
// ----------------------------------------------------------------------------

/**
 * Helper type. Was made for custom convenience.
 */
interface IObservableStateType<T, EventType>{
    readonly 'new': T,
    readonly 'old': T
    /**
     * Array of observers callbacks.
     */
    readonly observers: Observers<EventType>;
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {IObservableStateType};