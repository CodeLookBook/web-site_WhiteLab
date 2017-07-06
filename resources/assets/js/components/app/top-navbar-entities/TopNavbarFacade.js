import { TopNavbar } from "./TopNavbar";
import { TopNavbarMediator } from "./TopNavbarMediator";
var TopNavbarFacade = (function () {
    function TopNavbarFacade(topNavbar) {
        // Init properties
        {
            this._topNavbarMediator = TopNavbarMediator.getInstance();
            this._topNavbar = new TopNavbar(topNavbar, this._topNavbarMediator);
            this._topNavbarMediator.topNavbar = this._topNavbar;
        }
        // Subscribe on JS native events.
        {
            topNavbar.addEventListener('scroll', this.scrollEventHandler.bind(this));
        }
    }
    TopNavbarFacade.prototype.construct = function () {
    };
    TopNavbarFacade.prototype.scrollEventHandler = function () {
    };
    TopNavbarFacade.prototype.destract = function () {
    };
    return TopNavbarFacade;
}());
//# sourceMappingURL=TopNavbarFacade.js.map