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
import { Mediator } from "../../../global-abstarct-classes/Mediator";
import MediatorEventNames from "../../../global-classes/enums/MediatorEventNames";
import { TopNavbar } from "./TopNavbar";
var TopNavbarMediator = (function (_super) {
    __extends(TopNavbarMediator, _super);
    function TopNavbarMediator() {
        var _this = _super.call(this) || this;
        _this._topNavbar = null;
        return _this;
    }
    TopNavbarMediator.create = function () {
        return new TopNavbarMediator();
    };
    TopNavbarMediator.getInstance = function () {
        if (TopNavbarMediator._instance === null) {
            TopNavbarMediator._instance = TopNavbarMediator.create();
        }
        return TopNavbarMediator._instance;
    };
    Object.defineProperty(TopNavbarMediator.prototype, "topNavbar", {
        get: function () {
            if (this._topNavbar === null) {
                throw new ReferenceError("'this.topNavbar' instance is equal to " +
                    "'null',");
            }
            return this._topNavbar;
        },
        set: function (value) {
            if (value === null) {
                throw new ReferenceError("'TopNavbar' instance is equal to " +
                    "'null',");
            }
            this._topNavbar = value;
        },
        enumerable: true,
        configurable: true
    });
    TopNavbarMediator.prototype.send = function (eventName, colleague) {
        if (colleague instanceof TopNavbar) {
            switch (eventName) {
                case MediatorEventNames.Scrolled:
                    break;
            }
        }
    };
    return TopNavbarMediator;
}(Mediator));
TopNavbarMediator._instance = null;
export { TopNavbarMediator };
//# sourceMappingURL=TopNavbarMediator.js.map