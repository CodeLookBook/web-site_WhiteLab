var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { BrowserEvents } from "../enums/BrowserEvents";
import { BrowserClientWidth } from "../observers/BrowserClientWidth";
import { BrowserClientHeight } from "../observers/BrowserClientHeight";
// ----------------------------------------------------------------------------
// Browser class.
// ----------------------------------------------------------------------------
/** - Stores information about browser state.
 * - Implements "Singleton" pattern.
 * - Implements "Observer" pattern;
 */
var Browser = (function () {
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    function Browser() {
        this._clientWidthObserver = BrowserClientWidth.getInstance();
        this._clientHeightObserver = BrowserClientHeight.getInstance();
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Creates Browser class instance.
     * @return {Browser} Browser class instance.
     * |It's a part of the Singleton pattern.|
     */
    Browser.create = function () {
        return new Browser();
    };
    /**
     * Create and returns new 'Browse' class instance if it dose not  exists.
     * If it does, returns existing one.
     * @return {Browser | never} 'Browse' class instance
     * @throws {ReferenceError}  If 'Browser' class instance wasn't created.
     */
    Browser.getInstance = function () {
        //Create Browser class instance.
        if (Browser._instance === null) {
            Browser._instance = Browser.create();
        }
        //If '_instance' wasn't created throw error.
        if (Browser._instance === null) {
            throw new ReferenceError();
        }
        return Browser._instance;
    };
    /**
     * Subscribe function handler on selected event.
     * @param type      - Browser event name.
     * @param handler   - CallBack function.
     */
    Browser.prototype.on = function (type, handler) {
        switch (type) {
            case BrowserEvents.ClientHeightChanged:
                this._clientHeightObserver.on(handler);
                break;
            case BrowserEvents.ClientWidthChanged:
                this._clientWidthObserver.on(handler);
                break;
            default:
                throw new Error("Event name doesn't exist.");
        }
    };
    /**
     * Unsubscribes handler from selected event.
     * @param type      - Browser event name.
     * @param handler   - CallBack function.
     */
    Browser.prototype.off = function (type, handler) {
        switch (type) {
            case BrowserEvents.ClientHeightChanged:
                this._clientHeightObserver.off(handler);
                break;
            case BrowserEvents.ClientWidthChanged:
                this._clientWidthObserver.off(handler);
                break;
            default:
                throw new Error("Event name doesn't exist.");
        }
    };
    Object.defineProperty(Browser.prototype, "clientHeight", {
        /**
         * @return {IHeightPx} Browser client height, px.
         */
        get: function () {
            return __assign({}, this._clientHeightObserver.state.new);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser.prototype, "clientWidth", {
        /**
         * @return {IHeightPx} Browser client width, px.
         */
        get: function () {
            return __assign({}, this._clientWidthObserver.state.new);
        },
        enumerable: true,
        configurable: true
    });
    return Browser;
}());
// ------------------------------------------------------------------------
// Properties
// ------------------------------------------------------------------------
/**
 * Browser class instance.
 * |It's a part of the Singleton pattern.|
 */
Browser._instance = null;
export { Browser };
//# sourceMappingURL=Browser.js.map