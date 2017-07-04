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
    /**
     * @param owner     - Reference to the state object owner.
     * @param newHeight - New value of the state.
     * @param observers - List of observers.
     */
    function UnmodifiedBrowserClientHeightState(owner, newHeight, observers) {
        return _super.call(this, owner, newHeight, observers) || this;
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         *   Must not invoke 'this.notify();' here.                          *
         *   Forbidden behavior for this class.                            *
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Changes 'state' property in 'Observable' instance (owner).
     *
     * @param newHeight - State value.
     */
    UnmodifiedBrowserClientHeightState.prototype.changeState = function (newHeight) {
        if (this.new.value !== newHeight.value) {
            this.owner.state = new ModifiedBrowserClientHeightState(this.owner, newHeight, this.observers);
            this.notify();
        }
    };
    return UnmodifiedBrowserClientHeightState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { UnmodifiedBrowserClientHeightState };
//# sourceMappingURL=UnmodifiedBrowserClientHeightState.js.map