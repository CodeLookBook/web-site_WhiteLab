import {IEventHandlerType} from "../global-interfaces/IEventHandlerType";
import {ObservableState} from "./ObservableState";

// ----------------------------------------------------------------------------
// Observable abstract class.
// ----------------------------------------------------------------------------

/**
 * - It's a part of the "Observer" pattern;
 */
abstract class Observable<T, EventType>{

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    //Data state.
    private _state: ObservableState<T, EventType>;

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Creates Event class object that will be sent to subscribers.
     */
    protected abstract createEvent(): EventType;

    /**
     * Adds subscriber to subscribers list;
     */
    public on(handler: IEventHandlerType<EventType>): void {
        this.state.observers.push(handler);

        //Send current state to new observer.
        {
            const event : EventType = this.createEvent()   ;
            const length: number    = this.state.observers.length;

            if(length > 0){
                this.state.observers[length - 1](event);
            }
        }
    }

    /**
     * Remove on from subscribers list;
     */
    public off(handler: IEventHandlerType<EventType>): void {

        //Find handler index in array.
        const index: number = this.state.observers.indexOf(handler);

        //Delete handler from array.
        if(index === -1){
            return;
        } else {
            this.state.observers.slice(index, 1);
        }
    }

    /**
     * Notify subscribers about changes;
     */
    public abstract notify(): void;

    /**
     * Object 'State' instance.
     *
     * @param value - New state value.
     */
    public set state(value: ObservableState<T, EventType>){
        this._state = value;
    }

    /**
     * Object 'State' instance.
     *
     * @return {ObservableState<T, EventType>}
     */
    public get state(): ObservableState<T, EventType>{
        return this._state;
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {Observable};