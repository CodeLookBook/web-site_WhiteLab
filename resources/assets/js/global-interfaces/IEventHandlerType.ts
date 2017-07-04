interface IEventHandlerType<EventType>{
    (event: EventType): void;
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {IEventHandlerType};