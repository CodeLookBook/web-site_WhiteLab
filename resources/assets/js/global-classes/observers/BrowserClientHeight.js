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
import { ModifiedBrowserClientHeightState } from "../states/ModifiedBrowserClientHeightState";
import { Observable } from "../../global-abstarct-classes/Observable";
// ----------------------------------------------------------------------------
// BrowserClientHeight class.
// ----------------------------------------------------------------------------
/**
 * - Send browser client height value to  it's observers.
 * - Implements "Observer" pattern;
 * - Implements pattern: "Singleton";
 */
var BrowserClientHeight = (function (_super) {
    __extends(BrowserClientHeight, _super);
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    function BrowserClientHeight() {
        var _this = _super.call(this) || this;
        // Init. new class state.
        {
            var newClientHeight = _this.getClientHeight();
            var oldClientHeight = { value: 0, measure: "px" };
            _this.state = new ModifiedBrowserClientHeightState(newClientHeight, oldClientHeight, [], _this);
        }
        // Subscribe on window 'resize' event.
        window.addEventListener('resize', _this.windowResizeHandler.bind(_this));
        return _this;
    }
    // ------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------
    /**
     * Creates new BrowserClientHeight instance.
     * @return {BrowserClientHeight}
     */
    BrowserClientHeight._create = function () {
        return new BrowserClientHeight();
    };
    /**
     * Creates new or returns to client existing BrowserClientHeight instance.
     * @return {BrowserClientHeight|null}
     * @throws {ReferenceError}  If 'BrowserClientHeight' class instance wasn't
     *                           created.
     */
    BrowserClientHeight.getInstance = function () {
        if (BrowserClientHeight._instance === null) {
            BrowserClientHeight._instance = BrowserClientHeight._create();
        }
        if (BrowserClientHeight._instance === null) {
            throw new ReferenceError("BrowserClientHeight instance wasn't " +
                "created.");
        }
        return BrowserClientHeight._instance;
    };
    /**
     * Gets window client height, px.
     * @return {number} - client height, px.
     * @private
     */
    BrowserClientHeight.prototype.getClientHeight = function () {
        return {
            value: window.document.documentElement.clientHeight ||
                window.document.body.clientHeight,
            measure: 'px'
        };
    };
    BrowserClientHeight.prototype.createEvent = function () {
        return this.state.createEvent();
    };
    /**
     * Notify subscribers about changes;
     */
    BrowserClientHeight.prototype.notify = function () {
        if (this.state instanceof ModifiedBrowserClientHeightState) {
            this.state.notify();
        }
    };
    /**
     * Window resize handler.
     *
     * Change BrowserClientHeight instance 'state' property.
     * @private
     */
    BrowserClientHeight.prototype.windowResizeHandler = function () {
        var newClientHeight = this.getClientHeight();
        this.state.handleNewValue(newClientHeight);
    };
    return BrowserClientHeight;
}(Observable));
// ------------------------------------------------------------------------
// Properties
// ------------------------------------------------------------------------
/**
 * Unique single instance of the BrowserClientHeight class.
 */
BrowserClientHeight._instance = null;
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { BrowserClientHeight };
//# sourceMappingURL=BrowserClientHeight.js.map