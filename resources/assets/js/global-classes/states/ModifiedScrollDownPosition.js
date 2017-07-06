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
import { ObservableState } from "../../global-abstarct-classes/ObservableState";
import { ScrollDownEvent } from "../events/ScrollDownEvent";
import { UnmodifiedScrollDownPosition } from "./UnmodifiedScrollDownPosition";
var ModifiedScrollDownPosition = (function (_super) {
    __extends(ModifiedScrollDownPosition, _super);
    function ModifiedScrollDownPosition(newValue, oldValue, observers, owner) {
        var _this = _super.call(this, newValue, oldValue, observers, owner) || this;
        _this.notify();
        return _this;
    }
    ModifiedScrollDownPosition.prototype.changeState = function (newValue, oldValue, observers, owner) {
        if (this.new.value === newValue.value) {
            this.owner.state = new UnmodifiedScrollDownPosition(this.new, this.old, this.observers, this.owner);
        }
        else {
            this.owner.state = new ModifiedScrollDownPosition(newValue, oldValue, observers, owner);
        }
    };
    ModifiedScrollDownPosition.prototype.createEvent = function () {
        var newPosition = __assign({}, this.new);
        var oldPosition = __assign({}, this.old);
        return new ScrollDownEvent(newPosition, oldPosition);
    };
    ModifiedScrollDownPosition.prototype.notify = function () {
        var length = this.observers.length;
        if (length > 0) {
            var event_1 = this.createEvent();
            this.observers.forEach(function (func) { return func(event_1); });
        }
    };
    return ModifiedScrollDownPosition;
}(ObservableState));
export { ModifiedScrollDownPosition };
//# sourceMappingURL=ModifiedScrollDownPosition.js.map