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
        var clientHeight = _this.getClientHeight();
        _this.state = new ModifiedBrowserClientHeightState(_this, clientHeight, []);
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
    /**
     * Creates Event class object that will be sent to subscribers.
     *
     * @return {BrowserClientHeightChanged}
     * @override
     */
    BrowserClientHeight.prototype.createEvent = function () {
        var newClientHeight = __assign({}, this.state.new);
        var oldClientHeight = __assign({}, this.state.old);
        //TODO: Создать Фабрику событий. Заменить BrowserClientHeightChanged.
        return new BrowserClientHeightChanged(newClientHeight, oldClientHeight);
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