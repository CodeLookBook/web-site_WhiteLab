// ----------------------------------------------------------------------------
// Browser class
// ----------------------------------------------------------------------------
/**
 * Browser class.
 * Stores information about browser state.
 */
var Browser = (function () {
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    function Browser(clientWidth, clientHeight) {
        if (clientWidth === void 0) { clientWidth = 0; }
        if (clientHeight === void 0) { clientHeight = 0; }
        // ------------------------------------------------------------------------
        // Private properties
        // ------------------------------------------------------------------------
        this._clientWidth = 0;
        this._clientHeight = 0;
        this._clientWidth = clientWidth;
        this._clientHeight = clientHeight;
    }
    Object.defineProperty(Browser.prototype, "clientWidth", {
        /**
         * Return browser client width.
         */
        get: function () {
            return this._clientWidth;
        },
        // ------------------------------------------------------------------------
        // Public getters and setters.
        // ------------------------------------------------------------------------
        /**
         * @param width - Browser client width.
         */
        set: function (width) {
            this._clientWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser.prototype, "clientHeight", {
        /**
         * Return browser client height.
         */
        get: function () {
            return this._clientHeight;
        },
        /**
         * @param height - Browser client height.
         */
        set: function (height) {
            this._clientHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    return Browser;
}());
// ----------------------------------------------------------------------------
// Browser class
// ----------------------------------------------------------------------------
export { Browser };
//# sourceMappingURL=Browser.js.map