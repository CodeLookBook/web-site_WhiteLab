// ----------------------------------------------------------------------------
// ObservableState<T> generic abstract class.
// ----------------------------------------------------------------------------
/**
 * - Stores 'Observable' object data;
 * - Class is a part of the "State" pattern;
 */
var ObservableState = (function () {
    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * @param newValue     - New value of the state.
     * @param oldValue     - Old value of the state.
     * @param observers    - List of observers or empty array.
     * @param owner        - Reference to the state object owner.
     */
    function ObservableState(newValue, oldValue, observers, owner) {
        //Init. class properties:
        {
            this._new = newValue;
            this._old = oldValue;
            this._observers = observers;
            this._owner = owner;
        }
    }
    Object.defineProperty(ObservableState.prototype, "new", {
        // ------------------------------------------------------------------------
        // Getters & Setters.
        // ------------------------------------------------------------------------
        /**
         * New state value
         * @return {T}
         */
        get: function () {
            return this._new;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableState.prototype, "old", {
        /**
         * Old state value,
         * @return {T}
         */
        get: function () {
            return this._old;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableState.prototype, "owner", {
        /**
         * State owner.
         *
         * @return {Observable<{T}, {EventType}>}
         */
        get: function () {
            return this._owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableState.prototype, "observers", {
        /**
         * The list of observers.
         * @return {Observers<EventType>}
         */
        get: function () {
            return this._observers;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles new state value.
     * @param newValue - New state value.
     */
    ObservableState.prototype.handleNewValue = function (newValue) {
        this.changeState(newValue, this.new, this.observers, this.owner);
    };
    return ObservableState;
}());
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { ObservableState };
//# sourceMappingURL=ObservableState.js.map