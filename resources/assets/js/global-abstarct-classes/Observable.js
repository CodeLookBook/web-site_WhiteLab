// ----------------------------------------------------------------------------
// Observable abstract class.
// ----------------------------------------------------------------------------
/**
 * - It's a part of the "Observer" pattern;
 */
var Observable = (function () {
    function Observable() {
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Adds subscriber to subscribers list;
     */
    Observable.prototype.on = function (handler) {
        this.state.observers.push(handler);
        //Invoke new observer.
        {
            var event_1 = this.createEvent();
            var length_1 = this.state.observers.length;
            this.state.observers[length_1 - 1](event_1);
        }
    };
    /**
     * Remove on from subscribers list;
     */
    Observable.prototype.off = function (handler) {
        //Find handler index in array.
        var index = this.state.observers.indexOf(handler);
        //Delete handler from array.
        if (index === -1) {
            return;
        }
        else {
            this.state.observers.slice(index, 1);
        }
    };
    /**
     * Notify subscribers about changes;
     */
    Observable.prototype.notify = function () {
        //Create event
        var event = this.createEvent();
        //Send event
        this.state.observers.forEach(function (value) {
            value(event);
        });
    };
    Object.defineProperty(Observable.prototype, "state", {
        /**
         * Object 'State' instance.
         *
         * @return {ObservableState<T, EventType>}
         */
        get: function () {
            return this._state;
        },
        /**
         * Object 'State' instance.
         *
         * @param value - New state value.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    return Observable;
}());
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { Observable };
//# sourceMappingURL=Observable.js.map