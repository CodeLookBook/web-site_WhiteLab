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
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * @param owner     - Reference to the state object owner.
     * @param value     - New value of the state.
     * @param observers - List of observers.
     */
    function ModifiedBrowserClientWidthState(owner, value, observers) {
        return _super.call(this, owner, value, observers) || this;
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
    ModifiedBrowserClientWidthState.prototype.changeState = function (newWidth) {
        if (this.new.value === newWidth.value) {
            // Change owner state to  'Unmodified'.
            this.owner.state = new UnmodifiedBrowserClientWidthState(this.owner, newWidth, this.observers);
        }
        else {
            // Update current state
            this.new.value = newWidth.value;
            // Notify subscribers
            this.notify();
        }
    };
    return ModifiedBrowserClientWidthState;
}(ObservableState));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { ModifiedBrowserClientWidthState };
//# sourceMappingURL=ModifiedBrowserClientWidthState.js.map