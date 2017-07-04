var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// ----------------------------------------------------------------------------
// BrowserClientWidthChanged class.
// ----------------------------------------------------------------------------
/**
 * - Transport state to subscriber;
 */
var BrowserClientWidthChanged = (function () {
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    /**
     *
     * @param newClientWidth - new browser client width.
     * @param oldClientWidth - old browser client width.
     */
    function BrowserClientWidthChanged(newClientWidth, oldClientWidth) {
        this._newClientWidth = __assign({}, newClientWidth);
        this._oldClientWidth = __assign({}, oldClientWidth);
    }
    Object.defineProperty(BrowserClientWidthChanged.prototype, "newClientWidth", {
        // ------------------------------------------------------------------------
        // Getters & Setters
        // ------------------------------------------------------------------------
        /**
         * Browser client width, px.
         * @return {IWidthPx}
         */
        get: function () {
            return __assign({}, this._newClientWidth);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserClientWidthChanged.prototype, "oldClientWidth", {
        /**
         * Browser client width, px.
         * @return {IWidthPx}
         */
        get: function () {
            return __assign({}, this._oldClientWidth);
        },
        enumerable: true,
        configurable: true
    });
    return BrowserClientWidthChanged;
}());
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { BrowserClientWidthChanged };
//# sourceMappingURL=BrowserClientWidthChanged.js.map