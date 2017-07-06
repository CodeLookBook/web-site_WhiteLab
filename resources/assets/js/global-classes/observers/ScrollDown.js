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
import { ModifiedScrollDownPosition } from "../states/ModifiedScrollDownPosition";
var ScrollDown = (function (_super) {
    __extends(ScrollDown, _super);
    function ScrollDown(el) {
        var _this = _super.call(this) || this;
        // Init props.
        {
            _this._htmlEl = el;
            var newPosition = _this.getScrollPosition();
            var oldPosition = { value: 0, measure: 'px' };
            _this.state = new ModifiedScrollDownPosition(newPosition, oldPosition, [], _this);
        }
        _this._htmlEl.addEventListener('scroll', _this.onScroll.bind(_this));
        return _this;
    }
    ScrollDown.prototype.createEvent = function () {
        return this.state.createEvent();
    };
    ScrollDown.prototype.getScrollPosition = function () {
        return {
            value: this._htmlEl.scrollTop,
            measure: 'px'
        };
    };
    ScrollDown.prototype.notify = function () {
        if (this.state instanceof ModifiedScrollDownPosition) {
            this.state.notify();
        }
    };
    ScrollDown.prototype.onScroll = function () {
        var newPosition = this.getScrollPosition();
        this.state.handleNewValue(newPosition);
    };
    return ScrollDown;
}(Observable));
export { ScrollDown };
//# sourceMappingURL=ScrollDown.js.map