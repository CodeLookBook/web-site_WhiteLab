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
import { ModifiedBrowserClientWidthState } from "../states/ModifiedBrowserClientWidthState";
import { Observable } from "../../global-abstarct-classes/Observable";
// ----------------------------------------------------------------------------
// BrowserClientWidth class.
// ----------------------------------------------------------------------------
/** - Send browser client width value to  it's observers.
 * - Implements pattern: "Observer";
 * - Implements pattern: "Singleton";
 */
var BrowserClientWidth = (function (_super) {
    __extends(BrowserClientWidth, _super);
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    function BrowserClientWidth() {
        var _this = _super.call(this) || this;
        // Init. new class state.
        {
            var newClientWidth = _this.getClientWidth();
            var oldClientWidth = { value: 0, measure: "px" };
            _this.state = new ModifiedBrowserClientWidthState(newClientWidth, oldClientWidth, [], _this);
        }
        window.addEventListener('resize', _this.windowResizeHandler.bind(_this));
        return _this;
    }
    // ------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------
    /**
     * Creates new BrowserClientWidth instance.
     * This method is a part of the "Singleton" pattern, that was implemented
     * in this class.
     *
     * @return {BrowserClientWidth}
     * @static
     */
    BrowserClientWidth._create = function () {
        return new BrowserClientWidth();
    };
    /**
     * Creates new or returns to client existing BrowserClientWidth instance.
     * This method is a part of the "Singleton" pattern, that was implemented
     * in this class.
     *
     * @return {BrowserClientWidth|null}
     * @throws {ReferenceError}  If 'BrowserClientWidth' class instance wasn't
     *                           created.
     */
    BrowserClientWidth.getInstance = function () {
        if (BrowserClientWidth._instance === null) {
            BrowserClientWidth._instance = BrowserClientWidth._create();
        }
        if (BrowserClientWidth === null) {
            throw new ReferenceError("BrowserClientWidth instance wasn't " +
                "created.");
        }
        return BrowserClientWidth._instance;
    };
    /**
     * Gets window client width, px.
     * @return {number} - client width, px.
     * @private
     */
    BrowserClientWidth.prototype.getClientWidth = function () {
        return {
            value: window.document.documentElement.clientWidth ||
                window.document.body.clientWidth,
            measure: 'px'
        };
    };
    /**
     * Notify subscribers about changes;
     */
    BrowserClientWidth.prototype.notify = function () {
        if (this.state instanceof ModifiedBrowserClientWidthState) {
            this.state.notify();
        }
    };
    /**
     * Creates Event class object that will be sent to subscribers.
     *
     * @return {BrowserClientWidthChanged}
     * @override
     */
    BrowserClientWidth.prototype.createEvent = function () {
        return this.state.createEvent();
    };
    /**
     * Window resize handler.
     * Change BrowserClientWidth instance 'state' property.
     * @private
     */
    BrowserClientWidth.prototype.windowResizeHandler = function () {
        var newClientWidth = this.getClientWidth();
        this.state.handleNewValue(newClientWidth);
    };
    return BrowserClientWidth;
}(Observable));
// ------------------------------------------------------------------------
// Properties
// ------------------------------------------------------------------------
/**
 * Unique single instance of the BrowserClientWidth class.
 * @static
 */
BrowserClientWidth._instance = null;
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { BrowserClientWidth };
//# sourceMappingURL=BrowserClientWidth.js.map