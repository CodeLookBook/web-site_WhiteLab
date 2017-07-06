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
/**---------------------------------------------------------------------------
 * TopNavbarSlot class
 * ---------------------------------------------------------------------------
 * - Represents '.TOP-NAVBAR-SLOT' HTML DOM element;
 * - Gives simple API that helps to get DOM element description information;
 * - Implements Singleton pattern structure;
 */
var TopNavbarSlot = (function (_super) {
    __extends(TopNavbarSlot, _super);
    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * @param el       - HTML DOM element.
     * @param mediator - 'LayoutMediator' instance.
     */
    function TopNavbarSlot(el, mediator) {
        return _super.call(this, el, mediator) || this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Creates TopNavbarSlot instance.
     * @param el - HTML DOM element.
     * @param mediator - Instance that manages requests between slots.
     * @return {TopNavbarSlot}
     */
    TopNavbarSlot.create = function (el, mediator) {
        return new TopNavbarSlot(el, mediator);
    };
    /**
     * Returns TopNavbarSlot instance.
     * @param el  - HTML DOM element '.TOP-NAVBAR-SLOT'
     * @param mediator - Instance that manages requests between slots.
     * @return    - Singleton pattern instance.
     */
    TopNavbarSlot.getInstance = function (el, mediator) {
        //Create instance.
        if (TopNavbarSlot._instance === null) {
            TopNavbarSlot._instance = TopNavbarSlot.create(el, mediator);
        }
        //If '_instance' still equal to 'null' throw exception.
        if (TopNavbarSlot._instance === null) {
            throw new ReferenceError();
        }
        return TopNavbarSlot._instance;
    };
    return TopNavbarSlot;
}(DomElement));
// ------------------------------------------------------------------------
// Properties.
// ------------------------------------------------------------------------
/**
 * Singleton pattern instance.
 */
TopNavbarSlot._instance = null;
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { TopNavbarSlot };
//# sourceMappingURL=TopNavbarSlot.js.map