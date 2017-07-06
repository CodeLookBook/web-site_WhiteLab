import EventNames from "../../../global-classes/enums/MediatorEventNames";
import {ContentSlot} from "./ContentSlot";
import {MainContentSlot} from "./MainContentSlot";
import {TopNavbarSlot} from "./TopNavbarSlot";
import {Colleague} from "../../../global-abstarct-classes/Colleague";
import {Mediator} from "../../../global-abstarct-classes/Mediator";

/**---------------------------------------------------------------------------
 * LayoutMediator class
 * ---------------------------------------------------------------------------
 * - It is a member (Mediator) of the 'Mediator' pattern. ;
 * - Implements Singleton pattern structure;
 */
class LayoutMediator extends Mediator<EventNames>{

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    /**
     * Singleton pattern instance.
     */
    private static _instance: LayoutMediator | null = null;

    /**
     * Object that represents .MAIN-CONTENT-SLOT HTML DOM element
     * @type {MainContentSlot}
     * @private
     */
    private _mainContentSlot: MainContentSlot;

    /**
     * Object that represents '.TOP-NAVBAR-SLOT' HTML DOM element.
     * @type {TopNavbarSlot}
     * @private
     */
    private _topNavbarSlot: TopNavbarSlot;

    /**
     * Object that represents '.CONTENT-SLOT' HTML DOM element.
     * @type {ContentSlot}
     * @private
     */
    private _contentSlot: ContentSlot;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    protected constructor(){
        super();
    }

    // ------------------------------------------------------------------------
    // Getters & Setters
    // ------------------------------------------------------------------------

    /**
     * Object that represents .MAIN-CONTENT-SLOT HTML DOM element
     * @return {MainContentSlot}
     */
    get mainContentSlot(): MainContentSlot {
        return this._mainContentSlot;
    }

    set mainContentSlot(value: MainContentSlot) {
        this._mainContentSlot = value;
    }

    /**
     * Object that represents '.TOP-NAVBAR-SLOT' HTML DOM element.
     * @return {TopNavbarSlot}
     */
    get topNavbarSlot(): TopNavbarSlot {
        return this._topNavbarSlot;
    }

    set topNavbarSlot(value: TopNavbarSlot) {
        this._topNavbarSlot = value;
    }

    /**
     * Object that represents '.CONTENT-SLOT' HTML DOM element.
     * @return {ContentSlot}
     */
    get contentSlot(): ContentSlot {
        return this._contentSlot;
    }

    set contentSlot(value: ContentSlot) {
        this._contentSlot = value;
    }

    // ------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------

    /**
     * Creates LayoutMediator instance.
     * @return {LayoutMediator}
     */
    private static create(): LayoutMediator | never {
        return new LayoutMediator();
    }

    /**
     * Returns LayoutMediator instance.
     * @return {LayoutMediator}
     */
    static getInstance(): LayoutMediator | never {

        if(LayoutMediator._instance === null){
            LayoutMediator._instance = LayoutMediator.create();
        }

        //If '_instance' still equal to 'null' throw exception.
        if(LayoutMediator._instance === null){
            throw new ReferenceError();
        }

        return LayoutMediator._instance;
    }

    /**
     * @param eventName
     * @param colleague
     * @override
     */
    public send(eventName: EventNames, colleague: Colleague<EventNames>): void {

        // MainContentSlot colleague messages handler.
        if (colleague instanceof MainContentSlot) {

            // Validate request source type
            const mainContentSlot: MainContentSlot = colleague as MainContentSlot;

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
                            value:   mainContentSlot.height.value -
                            that._topNavbarSlot.height.value,
                            measure: mainContentSlot.height.measure
                        };
                    }(this));

                    break;

                default:
                    throw new Error("Wrong event name. LayoutMediator placed " +
                        "in 'layout' component cant, handle colleague " +
                        "request.");
            }

        } else if (colleague instanceof TopNavbarSlot) {

            switch (eventName) {}

        } else if (colleague instanceof ContentSlot){

            switch (eventName) {}

        }

    }

}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {LayoutMediator};