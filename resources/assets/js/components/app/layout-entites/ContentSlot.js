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
// ---------------------------------------------------------------------------
// ContentSlot class
// ---------------------------------------------------------------------------
/**
 * - Represents '.CONTENT-SLOT' HTML DOM element;
 * - Gives simple API that helps to get element description information;
 * - Implements 'Facade' pattern.
 * - Implements Singleton pattern structure;
 */
var ContentSlot = (function (_super) {
    __extends(ContentSlot, _super);
    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * @param el - HTML DOM element that represents slot for the Component.
     * @param mediator - Instance that manages requests between slots.
     * @return {ContentSlot}
     */
    function ContentSlot(el, mediator) {
        return _super.call(this, el, mediator) || this;
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Creates ContentSlot instance.
     * @param el       - HTML DOM element.
     * @param mediator - Instance that manages requests between slots.
     * @return         - Instance that represents HTML DOM element: '.CONTENT-SLOT'
     */
    ContentSlot.create = function (el, mediator) {
        return new ContentSlot(el, mediator);
    };
    /**
     * Returns ContentSlot instance.
     * @param el       - HTML DOM element '.CONTENT-SLOT'
     * @param mediator - Instance that manages requests between slots.
     * @return         - Singleton pattern instance.
     */
    ContentSlot.getInstance = function (el, mediator) {
        //Create instance.
        if (ContentSlot._instance === null) {
            ContentSlot._instance = ContentSlot.create(el, mediator);
        }
        //If '_instance' still equal to 'null' throw exception.
        if (ContentSlot._instance === null) {
            throw new ReferenceError();
        }
        return ContentSlot._instance;
    };
    return ContentSlot;
}(DomElement));
// ------------------------------------------------------------------------
// Properties.
// ------------------------------------------------------------------------
/**
 * Singleton pattern instance.
 */
ContentSlot._instance = null;
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { ContentSlot };
//# sourceMappingURL=ContentSlot.js.map