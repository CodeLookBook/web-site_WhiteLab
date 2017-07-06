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
import { ScrollUpEvent } from "../events/ScrollUpEvent";
import { ModifiedScrollUpPosition } from "./ModifiedScrollUpPosition";
import { ObservableState } from "../../global-abstarct-classes/ObservableState";
var UnmodifiedScrollUpPosition = (function (_super) {
    __extends(UnmodifiedScrollUpPosition, _super);
    function UnmodifiedScrollUpPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnmodifiedScrollUpPosition.prototype.changeState = function (newValue, oldValue, observers, owner) {
        if (this.new.value !== newValue.value) {
            this.owner.state = new ModifiedScrollUpPosition(newValue, oldValue, observers, owner);
        }
        else {
            this.owner.state = new UnmodifiedScrollUpPosition(this.new, this.old, this.observers, this.owner);
        }
    };
    UnmodifiedScrollUpPosition.prototype.createEvent = function () {
        var newPosition = __assign({}, this.new);
        var oldPosition = __assign({}, this.old);
        return new ScrollUpEvent(newPosition, oldPosition);
    };
    return UnmodifiedScrollUpPosition;
}(ObservableState));
export { UnmodifiedScrollUpPosition };
//# sourceMappingURL=UnmodifiedScrollUpPosition.js.map