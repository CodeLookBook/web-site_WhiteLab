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
import { BrowserClientWidthChanged } from "../events/BrowserClientWidthChanged";
import { UnmodifiedBrowserClientWidthState } from "./UnmodifiedBrowserClientWidthState";
import { ObservableState } from "../../global-abstarct-classes/ObservableState";
// ----------------------------------------------------------------------------
// ModifiedState class.
// ----------------------------------------------------------------------------
/** - Used in BrowserClientHeight and BrowserClientWidth classes as object
 *   that stores object 'state' and manages object behavior;
 * - Class is a part of the "State" pattern;
 */
var ModifiedBrowserClientWidthState = (function (_super) {
    __extends(ModifiedBrowserClientWidthState, _super);
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    /**
     * @param newWidth - New state value.
     * @param oldWidth - Old tate value.
     * @param observers - List of observers.
     * @param owner     - Ref. to the owner of the current 'state' object.
     */
    function ModifiedBrowserClientWidthState(newWidth, oldWidth, observers, owner) {
        var _this = _super.call(this, newWidth, oldWidth, observers, owner) || this;
        _this.notify();
        return _this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Changes 'state' property in 'Observable' instance (owner).
     * @param newValue  - New State value.
     * @param oldValue  - Old state value.
     * @param observers - Array of observers.
     * @param owner     - Ref. to state owner object.
     */
    ModifiedBrowserClientWidthState.prototype.changeState = function (newValue, oldValue, observers, owner) {
        if (this.new.value === newValue.value) {
            // Change owner state to  'Unmodified'.
            this.owner.state = new UnmodifiedBrowserClientWidthState(this.new, this.old, this.observers, this.owner);
        }
        else {
            // Create new modified state.
            this.owner.state = new ModifiedBrowserClientWidthState(newValue, oldValue, observers, owner);
        }
    };
    /**
     * Creates Event class object that will be sent to subscribers.
     */
    ModifiedBrowserClientWidthState.prototype.createEvent = function () {
        var newClientWidth = __assign({}, this.new);
        var oldClientWidth = __assign({}, this.old);
        //TODO: Создать Фабрику событий. Заменить BrowserClientWidthChanged.
        return new BrowserClientWidthChanged(newClientWidth, oldClientWidth);
    };
    /**
     * Notify subscribers about changes;
     */
    ModifiedBrowserClientWidthState.prototype.notify = function () {
        var length = this.observers.length;
        if (length > 0) {
            var event_1 = this.createEvent();
            this.observers.forEach(function (func) { return func(event_1); });
        }
    };
    return ModifiedBrowserClientWidthState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { ModifiedBrowserClientWidthState };
//# sourceMappingURL=ModifiedBrowserClientWidthState.js.map