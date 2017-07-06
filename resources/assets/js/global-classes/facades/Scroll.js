import { ScrollDown } from "../observers/ScrollDown";
import { ScrollUp } from "../observers/ScrollUp";
var Scroll = (function () {
    function Scroll(el) {
        //init class properties
        {
            this._scrollDown = new ScrollDown(el);
            this._scrollUp = new ScrollUp(el);
        }
    }
    Scroll.prototype.on = function (eventName, callBack) {
        switch (eventName) {
            case ScrollEvents.ScrollDown:
                this._scrollDown.on(callBack);
                break;
            case ScrollEvents.ScrollUp:
                this._scrollUp.on(callBack);
                break;
        }
    };
    Scroll.prototype.off = function (eventName, callBack) {
        switch (eventName) {
            case ScrollEvents.ScrollDown:
                this._scrollDown.off(callBack);
                break;
            case ScrollEvents.ScrollUp:
                this._scrollUp.off(callBack);
                break;
        }
    };
    return Scroll;
}());
export { Scroll };
//# sourceMappingURL=Scroll.js.map