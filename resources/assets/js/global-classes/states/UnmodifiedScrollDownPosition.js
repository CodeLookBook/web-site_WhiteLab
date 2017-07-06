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
import { ScrollDownEvent } from "../events/ScrollDownEvent";
import { ModifiedScrollDownPosition } from "./ModifiedScrollDownPosition";
import { ObservableState } from "../../global-abstarct-classes/ObservableState";
var UnmodifiedScrollDownPosition = (function (_super) {
    __extends(UnmodifiedScrollDownPosition, _super);
    function UnmodifiedScrollDownPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnmodifiedScrollDownPosition.prototype.changeState = function (newValue, oldValue, observers, owner) {
        if (this.new.value !== newValue.value) {
            this.owner.state = new ModifiedScrollDownPosition(newValue, oldValue, observers, owner);
        }
        else {
            this.owner.state = new UnmodifiedScrollDownPosition(this.new, this.old, this.observers, this.owner);
        }
    };
    UnmodifiedScrollDownPosition.prototype.createEvent = function () {
        var newPosition = __assign({}, this.new);
        var oldPosition = __assign({}, this.old);
        return new ScrollDownEvent(newPosition, oldPosition);
    };
    return UnmodifiedScrollDownPosition;
}(ObservableState));
export { UnmodifiedScrollDownPosition };
//# sourceMappingURL=UnmodifiedScrollDownPosition.js.map