import { LayoutMediator } from "./LayoutMediator";
import { MainContentSlot } from "./MainContentSlot";
import { TopNavbarSlot } from "./TopNavbarSlot";
import { ContentSlot } from "./ContentSlot";
import { Browser } from "../../../global-classes/facades/Browser";
import { BrowserEvents } from "../../../global-classes/enums/BrowserEvents";
import { Scroll } from "../../../global-classes/facades/Scroll";
// ----------------------------------------------------------------------------
// LayoutFacade class
// ----------------------------------------------------------------------------
var LayoutFacade = (function () {
    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------
    /**
     * Construct sub instances and mediator that manages those sub instances.
     *
     * @param mainContentSlot - Object that represents .MAIN-CONTENT-SLOT HTML
     *                          DOM element
     * @param topNavbarSlot   - Object that represents .TOP-NAVBAR-SLOT HTML
     *                          DOM element
     * @param contentSlot     - Object that represents .CONTENT-SLOT HTML DOM
     *                          element
     */
    function LayoutFacade(mainContentSlot, topNavbarSlot, contentSlot) {
        // ------------------------------------------------------------------------
        // Properties.
        // ------------------------------------------------------------------------
        /**
         * Object that represents Mediator.
         * @type {LayoutMediator  | null}
         * @private
         */
        this._layoutMediator = null;
        /**
         * Object that represents .MAIN-CONTENT-SLOT HTML DOM element
         * @type {MainContentSlot | null}
         * @private
         */
        this._mainContentSlot = null;
        /**
         * Object that represents .TOP-NAVBAR-SLOT HTML DOM element
         * @type {TopNavbarSlot   | null}
         * @private
         */
        this._topNavbarSlot = null;
        /**
         * Object that represents .CONTENT-SLOT HTML DOM element
         * @type {ContentSlot     | null}
         * @private
         */
        this._contentSlot = null;
        /**
         * Object that represents Browse.
         * @type {Browser | null}
         * @private
         */
        this._browser = null;
        /**
         * Represents .CONTENT-SLOT observable object that emmit's 'scroll' events.
         * @type {Scroll | null}
         * @private
         */
        this._scroll = null;
        //Creates colleagues and mediator
        {
            this._layoutMediator = LayoutMediator.getInstance();
            this._mainContentSlot = MainContentSlot.getInstance(mainContentSlot, this._layoutMediator);
            this._topNavbarSlot = TopNavbarSlot.getInstance(topNavbarSlot, this._layoutMediator);
            this._contentSlot = ContentSlot.getInstance(contentSlot, this._layoutMediator);
            this._browser = Browser.getInstance();
            this._scroll = new Scroll(mainContentSlot);
        }
        //Add ref's. on colleagues to mediator instance.
        {
            this._layoutMediator.mainContentSlot = this._mainContentSlot;
            this._layoutMediator.topNavbarSlot = this._topNavbarSlot;
            this._layoutMediator.contentSlot = this._contentSlot;
        }
        //Add handlers to window.
        {
            this._browser.on(BrowserEvents.ClientHeightChanged, this.setContentSlotHeight.bind(this));
            //...Добавить подписку на события к объекту scroll;
        }
    }
    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------
    /**
     * Window 'resize' event handler.
     * Changes 'this._contentSlot' height on window 'resize' event.
     */
    LayoutFacade.prototype.setContentSlotHeight = function (e) {
        //Validate LayoutFacade private properties.
        {
            if (this._contentSlot === null) {
                throw new ReferenceError("'this._contentSlot' must be " +
                    "initialized");
            }
            if (this._mainContentSlot === null) {
                throw new ReferenceError("'this._mainContentSlot' must be " +
                    "initialized");
            }
            if (this._topNavbarSlot === null) {
                throw new ReferenceError("'this._topNavbarSlot' must be " +
                    "initialized");
            }
        }
        //Set new height to 'this._contentSlot'
        {
            var value = this._mainContentSlot.height.value -
                this._topNavbarSlot.height.value;
            var measure = this._mainContentSlot.height.measure;
            this._contentSlot.height = { value: value, measure: measure };
        }
    };
    /**
     * Deletes all 'this._layoutMediator' colleagues.
     * Deletes all window 'resize' event handlers.
     */
    LayoutFacade.prototype.destruct = function () {
        //Delete all colleagues instances and mediator.
        {
            this._contentSlot = null;
            this._topNavbarSlot = null;
            this._mainContentSlot = null;
            this._layoutMediator = null;
        }
        // Delete observers from native JavaScript observable instances.
        {
            if (this._browser !== null) {
                this._browser.off(BrowserEvents.ClientHeightChanged, this.setContentSlotHeight.bind(this));
            }
        }
    };
    return LayoutFacade;
}());
export { LayoutFacade };
//# sourceMappingURL=LayoutFacade.js.map