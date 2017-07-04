import {IEventHandlerType} from "../../global-interfaces/IEventHandlerType";

type Observers<EventType> =  IEventHandlerType<EventType>[];

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {Observers};
