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
import { BrowserEvent } from "../../global-abstarct-classes/BrowserEvent";
// ----------------------------------------------------------------------------
// BrowserClientHeightChanged class.
// ----------------------------------------------------------------------------
/**
 * - Transport state to subscriber;
 */
var BrowserClientHeightChanged = (function (_super) {
    __extends(BrowserClientHeightChanged, _super);
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    /**
     *
     * @param newClientHeight - new browser client height.
     * @param oldClientHeight - old browser client height.
     */
    function BrowserClientHeightChanged(newClientHeight, oldClientHeight) {
        var _this = _super.call(this) || this;
        _this._newClientHeight = newClientHeight;
        _this._oldClientHeight = oldClientHeight;
        return _this;
    }
    Object.defineProperty(BrowserClientHeightChanged.prototype, "newClientHeight", {
        // ------------------------------------------------------------------------
        // Getters & Setters
        // ------------------------------------------------------------------------
        /**
         * Browser client height, px.
         * @return {IHeightPx}
         */
        get: function () {
            return __assign({}, this._newClientHeight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserClientHeightChanged.prototype, "oldClientHeight", {
        /**
         * Browser client height, px.
         * @return {IHeightPx}
         */
        get: function () {
            return __assign({}, this._oldClientHeight);
        },
        enumerable: true,
        configurable: true
    });
    return BrowserClientHeightChanged;
}(BrowserEvent));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { BrowserClientHeightChanged };
//# sourceMappingURL=BrowserClientHeightChanged.js.map