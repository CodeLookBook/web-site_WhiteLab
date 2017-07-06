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
    private readonly _observers: Observers<EventType>;

    /**
     * Reference to state owner.
     */
    private readonly _owner: Observable<T, EventType>;

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param newValue     - New value of the state.
     * @param oldValue     - Old value of the state.
     * @param observers    - List of observers or empty array.
     * @param owner        - Reference to the state object owner.
     */
    constructor(newValue : T,
                oldValue : T,
                observers: Observers<EventType>,
                owner    : Observable<T, EventType>
                ){

        //Init. class properties:
        {
            this._new       = newValue;
            this._old       = oldValue;
            this._observers = observers;
            this._owner     = owner;
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
     * @param newValue  - New state value.
     * @param oldValue  - New state value.
     * @param observers - Observers list.
     * @param owner     - Ref. to owner object.
     */
    protected abstract changeState(
        newValue : T,
        oldValue : T,
        observers: Observers<EventType>,
        owner    : Observable<T, EventType>
    ): void;

    /**
     * Handles new state value.
     * @param newValue - New state value.
     */
    public handleNewValue(newValue: T): void {
        this.changeState(newValue, this.new, this.observers, this.owner);
    }

    /**
     * Creates Event class object that will be sent to subscribers.
     */
    public abstract createEvent(): EventType;
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ObservableState};

