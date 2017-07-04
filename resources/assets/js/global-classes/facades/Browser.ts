import {BrowserEvents             } from "../enums/BrowserEvents";
import {BrowserClientHeightChanged} from "../events/BrowserClientHeightChanged";
import {BrowserClientWidthChanged } from "../events/BrowserClientWidthChanged";
import {BrowserClientWidth} from "../observers/BrowserClientWidth";
import {BrowserClientHeight} from "../observers/BrowserClientHeight";
import {IEventHandlerType} from "../../global-interfaces/IEventHandlerType";
import {IHeightPx} from "../../global-interfaces/IHeightPx";

// ----------------------------------------------------------------------------
// Browser class.
// ----------------------------------------------------------------------------
/** - Stores information about browser state.
 * - Implements "Singleton" pattern.
 * - Implements "Observer" pattern;
 */
class Browser{

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    /**
     * Browser class instance.
     * |It's a part of the Singleton pattern.|
     */
    private static _instance: Browser | null = null;

    /**
     * BrowserClientWidth observable object.
     * @type {number}
     * @private
     */
    public _clientWidthObserver : BrowserClientWidth;

    /**
     * BrowserClientHeight observable object.
     * @type {number}
     * @private
     */
    public _clientHeightObserver: BrowserClientHeight;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    constructor() {

        this._clientWidthObserver  = BrowserClientWidth.getInstance();
        this._clientHeightObserver = BrowserClientHeight.getInstance();
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Creates Browser class instance.
     * @return {Browser} Browser class instance.
     * |It's a part of the Singleton pattern.|
     */
    private static create(): Browser{
        return new Browser();
    }

    /**
     * Create and returns new 'Browse' class instance if it dose not  exists.
     * If it does, returns existing one.
     * @return {Browser | never} 'Browse' class instance
     * @throws {ReferenceError}  If 'Browser' class instance wasn't created.
     */
    public static getInstance(): Browser | never {

        //Create Browser class instance.
        if(Browser._instance === null){
            Browser._instance = Browser.create();
        }

        //If '_instance' wasn't created throw error.
        if(Browser._instance === null){
            throw new ReferenceError();
        }

        return Browser._instance;
    }

    /**
     * 'on' function overloads.
     */
    public on(
        type: BrowserEvents.ClientHeightChanged,
        handler: IEventHandlerType<BrowserClientHeightChanged>
    ):void | never;

    public on(
        type: BrowserEvents.ClientWidthChanged,
        handler: IEventHandlerType<BrowserClientWidthChanged>
    ):void | never;

    /**
     * Subscribe function handler on selected event.
     * @param type      - Browser event name.
     * @param handler   - CallBack function.
     */
    public on(type: any, handler: any): void | never{

       switch (type){
           case BrowserEvents.ClientHeightChanged:
               this._clientHeightObserver.on(handler);
               break;
           case BrowserEvents.ClientWidthChanged:
               this._clientWidthObserver.on(handler);
               break;
           default:
               throw new Error("Event name doesn't exist.");
       }
    }

    /**
     * 'remove' function overloads.
     */
    public off(
        type: BrowserEvents.ClientHeightChanged,
        handler: IEventHandlerType<BrowserClientHeightChanged>
    ):void | never;

    public off(
        type: BrowserEvents.ClientWidthChanged,
        handler: IEventHandlerType<BrowserClientWidthChanged>
    ):void | never;

    /**
     * Unsubscribes handler from selected event.
     * @param type      - Browser event name.
     * @param handler   - CallBack function.
     */
    public off(type: any, handler: any): void | never{

        switch (type){
            case BrowserEvents.ClientHeightChanged:
                this._clientHeightObserver.off(handler);
                break;
            case BrowserEvents.ClientWidthChanged:
                this._clientWidthObserver.off(handler);
                break;
            default:
                throw new Error("Event name doesn't exist.");
        }
    }

    /**
     * @return {IHeightPx} Browser client height, px.
     */
    get clientHeight(): IHeightPx {
        return {...this._clientHeightObserver.state.new};
    }

    /**
     * @return {IHeightPx} Browser client width, px.
     */
    get clientWidth(): IHeightPx {
        return {...this._clientWidthObserver.state.new};
    }
}

export {Browser}
