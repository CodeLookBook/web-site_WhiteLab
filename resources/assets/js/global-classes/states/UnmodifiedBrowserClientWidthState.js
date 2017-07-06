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
import { ModifiedBrowserClientWidthState } from "./ModifiedBrowserClientWidthState";
import { BrowserClientWidthChanged } from "../events/BrowserClientWidthChanged";
import { ObservableState } from "../../global-abstarct-classes/ObservableState";
// ----------------------------------------------------------------------------
// UnmodifiedState class.
// ----------------------------------------------------------------------------
/** - Used in BrowserClientHeight or BrowserClientWidth classes as object
 *   that stores object 'state' data;
 * - Class is a part of the "State" pattern;
 */
var UnmodifiedBrowserClientWidthState = (function (_super) {
    __extends(UnmodifiedBrowserClientWidthState, _super);
    function UnmodifiedBrowserClientWidthState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Changes 'state' property in 'Observable' instance (owner).
     * @param newValue
     * @param oldValue
     * @param observers
     * @param owner
     */
    UnmodifiedBrowserClientWidthState.prototype.changeState = function (newValue, oldValue, observers, owner) {
        if (this.new.value !== newValue.value) {
            this.owner.state = new ModifiedBrowserClientWidthState(newValue, oldValue, observers, owner);
        }
        else {
            this.owner.state = new UnmodifiedBrowserClientWidthState(this.new, this.old, this.observers, this.owner);
        }
    };
    /**
     * Creates Event class object that will be sent to subscribers.
     */
    UnmodifiedBrowserClientWidthState.prototype.createEvent = function () {
        var newClientWidth = __assign({}, this.new);
        var oldClientWidth = __assign({}, this.old);
        //TODO: Создать Фабрику событий. Заменить BrowserClientWidthChanged.
        return new BrowserClientWidthChanged(newClientWidth, oldClientWidth);
    };
    return UnmodifiedBrowserClientWidthState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { UnmodifiedBrowserClientWidthState };
//# sourceMappingURL=UnmodifiedBrowserClientWidthState.js.map