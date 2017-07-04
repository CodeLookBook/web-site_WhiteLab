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
import { DomElement } from "./DomElement";
/**---------------------------------------------------------------------------
 * MainContentSlot class
 * ---------------------------------------------------------------------------
 * - Represents .MAIN-CONTENT-SLOT HTML DOM element;
 * - Gives simple API that helps to get element description information;
 * - Implements Singleton pattern structure;
 */
var MainContentSlot = (function (_super) {
    __extends(MainContentSlot, _super);
    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * @param el       - HTML DOM element.
     * @param mediator - 'LayoutMediator' instance.
     */
    function MainContentSlot(el, mediator) {
        return _super.call(this, el, mediator) || this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Creates MainContentSlot instance.
     * @param el - HTML DOM element.
     * @param mediator - Instance that manages requests between slots.
     * @return {MainContentSlot}
     */
    MainContentSlot.create = function (el, mediator) {
        return new MainContentSlot(el, mediator);
    };
    /**
     * Returns MainContentSlot instance.
     * @param el  - HTML DOM element '.MAIN-CONTENT-SLOT'
     * @param mediator - Instance that manages requests between slots.
     * @return    - Singleton pattern instance.
     */
    MainContentSlot.getInstance = function (el, mediator) {
        //Create instance.
        if (MainContentSlot._instance === null) {
            MainContentSlot._instance = MainContentSlot.create(el, mediator);
        }
        //If '_instance' still equal to 'null' throw exception.
        if (MainContentSlot._instance === null) {
            throw new ReferenceError();
        }
        return MainContentSlot._instance;
    };
    return MainContentSlot;
}(DomElement));
// ------------------------------------------------------------------------
// Properties.
// ------------------------------------------------------------------------
/**
 * Singleton pattern instance.
 */
MainContentSlot._instance = null;
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { MainContentSlot };
//# sourceMappingURL=MainContentSlot.js.map