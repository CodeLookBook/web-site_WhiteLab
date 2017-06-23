// ----------------------------------------------------------------------------
// Browser class
// ----------------------------------------------------------------------------

/**
 * Browser class.
 * Stores information about browser state.
 */
class Browser {

    // ------------------------------------------------------------------------
    // Private properties
    // ------------------------------------------------------------------------

    private _clientWidth : number = 0;
    private _clientHeight: number = 0;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    constructor(clientWidth: number = 0, clientHeight: number = 0) {
        this._clientWidth  = clientWidth;
        this._clientHeight = clientHeight;
    }

    // ------------------------------------------------------------------------
    // Public getters and setters.
    // ------------------------------------------------------------------------

    /**
     * @param width - Browser client width.
     */
    set clientWidth(width: number){
        this._clientWidth = width;
    }

    /**
     * Return browser client width.
     */
    get clientWidth():number {
        return this._clientWidth;
    }

    /**
     * @param height - Browser client height.
     */
    set clientHeight(height: number){
        this._clientHeight = height;
    }

    /**
     * Return browser client height.
     */
    get clientHeight():number {
        return this._clientHeight;
    }
}

// ----------------------------------------------------------------------------
// Browser class
// ----------------------------------------------------------------------------

export { Browser };

