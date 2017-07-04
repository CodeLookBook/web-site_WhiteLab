import {BrowserEvent} from "../../global-abstarct-classes/BrowserEvent";
import {IHeightPx} from "../../global-interfaces/IHeightPx";

// ----------------------------------------------------------------------------
// BrowserClientHeightChanged class.
// ----------------------------------------------------------------------------
/**
 * - Transport state to subscriber;
 */
class BrowserClientHeightChanged extends BrowserEvent{

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    /**
     * Browser client height, px.
     */
    private readonly _newClientHeight: IHeightPx;

    /**
     * Browser client height, px.
     */
    private readonly _oldClientHeight: IHeightPx ;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     *
     * @param newClientHeight - new browser client height.
     * @param oldClientHeight - old browser client height.
     */
    constructor(newClientHeight: IHeightPx, oldClientHeight: IHeightPx){

        super();

        this._newClientHeight = newClientHeight;
        this._oldClientHeight = oldClientHeight;
    }

    // ------------------------------------------------------------------------
    // Getters & Setters
    // ------------------------------------------------------------------------

    /**
     * Browser client height, px.
     * @return {IHeightPx}
     */
    get newClientHeight(): IHeightPx {
        return {...this._newClientHeight};
    }

    /**
     * Browser client height, px.
     * @return {IHeightPx}
     */
    get oldClientHeight(): IHeightPx {
        return {...this._oldClientHeight};
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {BrowserClientHeightChanged};
