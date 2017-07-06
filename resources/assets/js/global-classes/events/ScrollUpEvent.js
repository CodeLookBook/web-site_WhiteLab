var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var ScrollUpEvent = (function () {
    function ScrollUpEvent(newPosition, oldPosition) {
        this._newPosition = newPosition;
        this._oldPosition = oldPosition;
    }
    Object.defineProperty(ScrollUpEvent.prototype, "newPosition", {
        get: function () {
            return __assign({}, this._newPosition);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollUpEvent.prototype, "oldPosition", {
        get: function () {
            return __assign({}, this._oldPosition);
        },
        enumerable: true,
        configurable: true
    });
    return ScrollUpEvent;
}());
export { ScrollUpEvent };
//# sourceMappingURL=ScrollUpEvent.js.map