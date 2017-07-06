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
import { ModifiedBrowserClientHeightState } from "./ModifiedBrowserClientHeightState";
import { ObservableState } from "../../global-abstarct-classes/ObservableState";
// ----------------------------------------------------------------------------
// UnmodifiedState class.
// ----------------------------------------------------------------------------
/** - Used in BrowserClientHeight or BrowserClientWidth classes as object
 *   that stores object 'state' data;
 * - Class is a part of the "State" pattern;
 */
var UnmodifiedBrowserClientHeightState = (function (_super) {
    __extends(UnmodifiedBrowserClientHeightState, _super);
    function UnmodifiedBrowserClientHeightState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     *
     * @param newValue  - New state value.
     * @param oldValue  - Old state value.
     * @param observers - List of observers or empty array.
     * @param owner     - Ref. to state owner object.
     */
    UnmodifiedBrowserClientHeightState.prototype.changeState = function (newValue, oldValue, observers, owner) {
        // Change state.
        if (this.new.value !== newValue.value) {
            this.owner.state = new ModifiedBrowserClientHeightState(newValue, oldValue, observers, owner);
        }
        else {
            this.owner.state = new UnmodifiedBrowserClientHeightState(this.new, this.old, this.observers, this.owner);
        }
    };
    /**
     * Creates Event class object that will be sent to subscribers.
     */
    UnmodifiedBrowserClientHeightState.prototype.createEvent = function () {
        var newClientHeight = __assign({}, this.new);
        var oldClientHeight = __assign({}, this.old);
        //TODO: Создать Фабрику событий. Заменить BrowserClientHeightChanged.
        return new BrowserClientHeightChanged(newClientHeight, oldClientHeight);
    };
    return UnmodifiedBrowserClientHeightState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { UnmodifiedBrowserClientHeightState };
//# sourceMappingURL=UnmodifiedBrowserClientHeightState.js.map