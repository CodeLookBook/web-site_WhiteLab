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
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * @param owner     - Reference to the state object owner.
     * @param newHeight - New value of the state.
     * @param observers - List of observers.
     */
    function ModifiedBrowserClientHeightState(owner, newHeight, observers) {
        return _super.call(this, owner, newHeight, observers) || this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Changes 'state' property in 'Observable' instance (owner).
     *
     * @param newHeight - State value.
     */
    ModifiedBrowserClientHeightState.prototype.changeState = function (newHeight) {
        if (this.new.value === newHeight.value) {
            //Change owner instance state.
            this.owner.state = new UnmodifiedBrowserClientHeightState(this.owner, newHeight, this.observers);
        }
        else {
            // Update state.
            this.new.value = newHeight.value;
            // Notify subscribers.
            this.notify();
        }
    };
    return ModifiedBrowserClientHeightState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { ModifiedBrowserClientHeightState };
//# sourceMappingURL=ModifiedBrowserClientHeightState.js.map