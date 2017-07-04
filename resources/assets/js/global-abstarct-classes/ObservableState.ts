import {Observers} from "../global-classes/types/Observers";
import {Observable} from "./Observable";

// ----------------------------------------------------------------------------
// ObservableState<T> generic abstract class.
// ----------------------------------------------------------------------------

/**
 * - Stores 'Observable' object data;
 * - Class is a part of the "State" pattern;
 */
abstract class ObservableState<T, EventType> {

    // ------------------------------------------------------------------------
    // Properties.
    // ------------------------------------------------------------------------

    /**
     * Reference to state owner.
     */
    private readonly _owner: Observable<T, EventType>;

    /**
     * New state values.
     */
    private readonly _new: T;

    /**
     * Old state value.
     */
    private readonly _old: T;

    /**
     * Array of observers callbacks.
     */
    private readonly _observers: Observers<EventType>

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param owner     - Reference to the state object owner.
     * @param value     - New value of the state.
     * @param observers - List of observers.
     */
    constructor(owner: Observable<T, EventType>,
                value: T,
                observers: Observers<EventType>){

        //Init class properties:
        {
            this._owner     = owner;
            this._observers = observers;
            this._new       = value;
        }

    }

    // ------------------------------------------------------------------------
    // Getters & Setters.
    // ------------------------------------------------------------------------

    /**
     * New state value
     * @return {T}
     */
    public get new(): T {
        return this._new;
    }

    /**
     * Old state value,
     * @return {T}
     */
    public get old(): T{
        return this._old;
    }

    /**
     * State owner.
     *
     * @return {Observable<{T}, {EventType}>}
     */
    public get owner(): Observable<T, EventType> {
        return this._owner;
    }

    /**
     * The list of observers.
     * @return {Observers<EventType>}
     */
    public get observers(): Observers<EventType> {
        return this._observers;
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Changes object state property.
     *
     * @param newValue - New state value.
     * @param oldValue - New state value.
     * @param observers - Observers list.
     */
    protected abstract changeState(
        newValue: T,
        oldValue: T,
        observers: Observers<EventType>
    ): void;

    /**
     * Handles new state value.
     *
     * @param newValue - New state value.
     */
    public handleNewValue(newValue: T): void {
        this.changeState(newValue, this.old, this.observers);
    }

    // Notify all subscribers
    protected notify(){
        this.owner.notify();
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ObservableState};

