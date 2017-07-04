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
     * Adds subscriber to subscribers list;
     */
    on(handler: IEventHandlerType<EventType>): void {
        this.state.observers.push(handler);

        //Invoke new observer.
        {
            const event: EventType = this.createEvent();
            const length = this.state.observers.length;

            this.state.observers[length - 1](event);
        }
    }

    /**
     * Remove on from subscribers list;
     */
    off(handler: IEventHandlerType<EventType>): void{

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
     * Creates Event class object that will be sent to subscribers.
     */
    protected abstract createEvent(): EventType;

    /**
     * Notify subscribers about changes;
     */
    notify(): void | never {

        //Create event
        const event: EventType = this.createEvent();

        //Send event
        this.state.observers.forEach((value) => {
            value(event)
        });
    }


    /**
     * Object 'State' instance.
     *
     * @param value - New state value.
     */
    set state(value: ObservableState<T, EventType>){
        this._state = value;
    }

    /**
     * Object 'State' instance.
     *
     * @return {ObservableState<T, EventType>}
     */
    get state(): ObservableState<T, EventType>{
        return this._state;
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {Observable};