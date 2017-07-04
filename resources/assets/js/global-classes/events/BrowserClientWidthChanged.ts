import {BrowserEvent} from "../../global-abstarct-classes/BrowserEvent";
import {IWidthPx} from "../../global-interfaces/IWidthPx";
// ----------------------------------------------------------------------------
// BrowserClientWidthChanged class.
// ----------------------------------------------------------------------------

/**
 * - Transport state to subscriber;
 */
class BrowserClientWidthChanged {

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    /**
     * Browser client width, px.
     */
    private readonly _newClientWidth: IWidthPx;

    /**
     * Browser client width, px.
     */
    private readonly _oldClientWidth: IWidthPx;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     *
     * @param newClientWidth - new browser client width.
     * @param oldClientWidth - old browser client width.
     */
    constructor(newClientWidth: IWidthPx, oldClientWidth: IWidthPx){
        this._newClientWidth = {...newClientWidth};
        this._oldClientWidth = {...oldClientWidth};
    }

    // ------------------------------------------------------------------------
    // Getters & Setters
    // ------------------------------------------------------------------------

    /**
     * Browser client width, px.
     * @return {IWidthPx}
     */
    get newClientWidth(): IWidthPx {
        return {...this._newClientWidth};
    }

    /**
     * Browser client width, px.
     * @return {IWidthPx}
     */
    get oldClientWidth(): IWidthPx{
        return {...this._oldClientWidth};
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {BrowserClientWidthChanged};
