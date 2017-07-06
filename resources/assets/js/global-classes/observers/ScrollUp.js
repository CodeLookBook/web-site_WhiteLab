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
import { Observable } from "../../global-abstarct-classes/Observable";
import { ModifiedScrollUpPosition } from "../states/ModifiedScrollUpPosition";
var ScrollUp = (function (_super) {
    __extends(ScrollUp, _super);
    function ScrollUp(el) {
        var _this = _super.call(this) || this;
        // Init props.
        {
            _this._htmlEl = el;
            var newPosition = _this.getScrollPosition();
            var oldPosition = { value: 0, measure: 'px' };
            _this.state = new ModifiedScrollUpPosition(newPosition, oldPosition, [], _this);
        }
        _this._htmlEl.addEventListener('scroll', _this.onScroll.bind(_this));
        return _this;
    }
    ScrollUp.prototype.createEvent = function () {
        return this.state.createEvent();
    };
    ScrollUp.prototype.getScrollPosition = function () {
        return {
            value: this._htmlEl.scrollTop,
            measure: 'px'
        };
    };
    ScrollUp.prototype.notify = function () {
        if (this.state instanceof ModifiedScrollUpPosition) {
            this.state.notify();
        }
    };
    ScrollUp.prototype.onScroll = function () {
        var newPosition = this.getScrollPosition();
        this.state.handleNewValue(newPosition);
    };
    return ScrollUp;
}(Observable));
export { ScrollUp };
//# sourceMappingURL=ScrollUp.js.map