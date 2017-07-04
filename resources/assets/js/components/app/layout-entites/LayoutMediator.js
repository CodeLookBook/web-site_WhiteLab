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
import EventNames from "./MediatorEventNames";
import { ContentSlot } from "./ContentSlot";
import { MainContentSlot } from "./MainContentSlot";
import { TopNavbarSlot } from "./TopNavbarSlot";
import { Mediator } from "../../../global-abstarct-classes/Mediator";
/**---------------------------------------------------------------------------
 * LayoutMediator class
 * ---------------------------------------------------------------------------
 * - It is a member (Mediator) of the 'Mediator' pattern. ;
 * - Implements Singleton pattern structure;
 */
var LayoutMediator = (function (_super) {
    __extends(LayoutMediator, _super);
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    function LayoutMediator() {
        return _super.call(this) || this;
    }
    Object.defineProperty(LayoutMediator.prototype, "mainContentSlot", {
        // ------------------------------------------------------------------------
        // Getters & Setters
        // ------------------------------------------------------------------------
        /**
         * Object that represents .MAIN-CONTENT-SLOT HTML DOM element
         * @return {MainContentSlot}
         */
        get: function () {
            return this._mainContentSlot;
        },
        set: function (value) {
            this._mainContentSlot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutMediator.prototype, "topNavbarSlot", {
        /**
         * Object that represents '.TOP-NAVBAR-SLOT' HTML DOM element.
         * @return {TopNavbarSlot}
         */
        get: function () {
            return this._topNavbarSlot;
        },
        set: function (value) {
            this._topNavbarSlot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutMediator.prototype, "contentSlot", {
        /**
         * Object that represents '.CONTENT-SLOT' HTML DOM element.
         * @return {ContentSlot}
         */
        get: function () {
            return this._contentSlot;
        },
        set: function (value) {
            this._contentSlot = value;
        },
        enumerable: true,
        configurable: true
    });
    // ------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------
    /**
     * Creates LayoutMediator instance.
     * @return {LayoutMediator}
     */
    LayoutMediator.create = function () {
        return new LayoutMediator();
    };
    /**
     * Returns LayoutMediator instance.
     * @return {LayoutMediator}
     */
    LayoutMediator.getInstance = function () {
        if (LayoutMediator._instance === null) {
            LayoutMediator._instance = LayoutMediator.create();
        }
        //If '_instance' still equal to 'null' throw exception.
        if (LayoutMediator._instance === null) {
            throw new ReferenceError();
        }
        return LayoutMediator._instance;
    };
    /**
     * @param eventName
     * @param colleague
     * @override
     */
    LayoutMediator.prototype.send = function (eventName, colleague) {
        // MainContentSlot colleague messages handler.
        if (colleague instanceof MainContentSlot) {
            // Validate request source type
            var mainContentSlot_1 = colleague;
            // Transfer changes to colleagues.
            switch (eventName) {
                case EventNames.HeightChanged:
                    /**
                     * If 'this._mainContentSlot' size was changed
                     * programmatically, than change "this._contentSlot"
                     * height;
                     */
                    (function (that) {
                        that._contentSlot.height = {
                            value: mainContentSlot_1.height.value -
                                that._topNavbarSlot.height.value,
                            measure: mainContentSlot_1.height.measure
                        };
                    }(this));
                    break;
                default:
                    throw new Error("Wrong event name. LayoutMediator placed " +
                        "in 'layout' component cant, handle colleague " +
                        "request.");
            }
        }
        else if (colleague instanceof TopNavbarSlot) {
            switch (eventName) {
            }
        }
        else if (colleague instanceof ContentSlot) {
            switch (eventName) {
            }
        }
    };
    return LayoutMediator;
}(Mediator));
// ------------------------------------------------------------------------
// Properties
// ------------------------------------------------------------------------
/**
 * Singleton pattern instance.
 */
LayoutMediator._instance = null;
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { LayoutMediator };
//# sourceMappingURL=LayoutMediator.js.map