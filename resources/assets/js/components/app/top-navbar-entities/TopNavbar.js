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
import { DomElement } from "../../../global-abstarct-classes/DomElement";
var TopNavbar = (function (_super) {
    __extends(TopNavbar, _super);
    function TopNavbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNavbar.create = function (el, mediator) {
        return new TopNavbar(el, mediator);
    };
    TopNavbar.getInstance = function (el, mediator) {
        if (TopNavbar._instance === null) {
            TopNavbar._instance = TopNavbar.create(el, mediator);
        }
        return TopNavbar._instance;
    };
    return TopNavbar;
}(DomElement));
TopNavbar._instance = null;
export { TopNavbar };
//# sourceMappingURL=TopNavbar.js.map