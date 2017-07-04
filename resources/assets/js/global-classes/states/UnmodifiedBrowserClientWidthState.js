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
import { ModifiedBrowserClientWidthState } from "./ModifiedBrowserClientWidthState";
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
    /**
     * @param owner - Reference to the state object owner.
     * @param value - New value of the state.
     * @param observers - List of observers.
     */
    function UnmodifiedBrowserClientWidthState(owner, value, observers) {
        return _super.call(this, owner, value, observers) || this;
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         *   Must not invoke 'this.fire();' here.                          *
         *   Forbidden behavior for this class.                            *
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Changes 'state' property in 'Observable' instance (owner).
     *
     * @param newWidth - State value.
     * @override
     */
    UnmodifiedBrowserClientWidthState.prototype.changeState = function (newWidth) {
        if (this.new.value !== newWidth.value) {
            this.owner.state = new ModifiedBrowserClientWidthState(this.owner, newWidth, this.observers);
            this.notify();
        }
    };
    return UnmodifiedBrowserClientWidthState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { UnmodifiedBrowserClientWidthState };
//# sourceMappingURL=UnmodifiedBrowserClientWidthState.js.map