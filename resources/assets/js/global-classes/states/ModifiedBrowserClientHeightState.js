var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { BrowserClientHeightChanged } from "../events/BrowserClientHeightChanged";
import { UnmodifiedBrowserClientHeightState } from "./UnmodifiedBrowserClientHeightState";
import { ObservableState } from "../../global-abstarct-classes/ObservableState";
// ----------------------------------------------------------------------------
// ModifiedState class.
// ----------------------------------------------------------------------------
/** - Used in BrowserClientHeight and BrowserClientWidth classes as object
 *   that stores object 'state' and manages object behavior;
 * - Class is a part of the "State" pattern;
 */
var ModifiedBrowserClientHeightState = (function (_super) {
    __extends(ModifiedBrowserClientHeightState, _super);
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    /**
     * @param newHeight - New state value.
     * @param oldHeight - Old tate value.
     * @param observers - List of observers.
     * @param owner     - Ref. to the owner of the current 'state' object.
     */
    function ModifiedBrowserClientHeightState(newHeight, oldHeight, observers, owner) {
        var _this = _super.call(this, newHeight, oldHeight, observers, owner) || this;
        _this.notify();
        return _this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Changes 'state' property in 'Observable' instance (owner).
     *
     * @param newHeight - New state value.
     * @param oldHeight - Old tate value.
     * @param observers - List of observers.
     * @param owner     - Ref. to the owner of the current 'state' object.
     */
    ModifiedBrowserClientHeightState.prototype.changeState = function (newHeight, oldHeight, observers, owner) {
        if (this.new.value === newHeight.value) {
            // Change owner instance state to 'unmodified'.
            this.owner.state = new UnmodifiedBrowserClientHeightState(this.new, this.old, this.observers, this.owner);
        }
        else {
            // Change owner instance state to 'modified'.
            this.owner.state = new ModifiedBrowserClientHeightState(newHeight, oldHeight, observers, owner);
        }
    };
    /**
     * Creates Event class object that will be sent to subscribers.
     */
    ModifiedBrowserClientHeightState.prototype.createEvent = function () {
        var newClientHeight = __assign({}, this.new);
        var oldClientHeight = __assign({}, this.old);
        //TODO: Создать Фабрику событий. Заменить BrowserClientHeightChanged.
        return new BrowserClientHeightChanged(newClientHeight, oldClientHeight);
    };
    /**
     * Notify subscribers about changes;
     */
    ModifiedBrowserClientHeightState.prototype.notify = function () {
        var length = this.observers.length;
        if (length > 0) {
            var event_1 = this.createEvent();
            this.observers.forEach(function (func) { return func(event_1); });
        }
    };
    return ModifiedBrowserClientHeightState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { ModifiedBrowserClientHeightState };
//# sourceMappingURL=ModifiedBrowserClientHeightState.js.map