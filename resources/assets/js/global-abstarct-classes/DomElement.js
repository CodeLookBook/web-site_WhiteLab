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
import EventNames from "../global-classes/enums/MediatorEventNames";
import { Colleague } from "./Colleague";
// ----------------------------------------------------------------------------
// DomElement abstract class.
// ----------------------------------------------------------------------------
/**
 * Abstract wrapper that provides simple API that helps to
 * get element description information;
 */
var DomElement = (function (_super) {
    __extends(DomElement, _super);
    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * @param el       - HTML DOM element.
     * @param mediator - 'LayoutMediator' instance.
     */
    function DomElement(el, mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._el = el;
        return _this;
    }
    Object.defineProperty(DomElement.prototype, "height", {
        /**
         * Get HTML DOM Element height.
         * @return {{height: number, unitMeasureName: string}} - Height is
         * calculated based on bounding client rectangle.
         */
        get: function () {
            var rectangle = this._el.getBoundingClientRect();
            return {
                value: Math.abs(rectangle.bottom - rectangle.top),
                measure: 'px'
            };
        },
        // ------------------------------------------------------------------------
        // Methods.
        // ------------------------------------------------------------------------
        /**
         * Set HTML DOM HTMLElement height.
         * @param height
         */
        set: function (height) {
            this._el.style.height = height.value + height.measure;
            this._mediator.send(EventNames.HeightChanged, this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomElement.prototype, "width", {
        /**
         * Get HTML DOM Element width.
         * @return {{height: number, unitMeasureName: string}} - Width is
         *          calculated based on bounding client rectangle.
         */
        get: function () {
            var rectangle = this._el.getBoundingClientRect();
            return {
                value: Math.abs(rectangle.right - rectangle.left),
                measure: 'px'
            };
        },
        /**
         * Set HTML DOM Element height.
         * @param width
         */
        set: function (width) {
            this._el.style.width = width.value + width.measure;
            this._mediator.send(EventNames.WidthChanged, this);
        },
        enumerable: true,
        configurable: true
    });
    return DomElement;
}(Colleague));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { DomElement };
//# sourceMappingURL=DomElement.js.map