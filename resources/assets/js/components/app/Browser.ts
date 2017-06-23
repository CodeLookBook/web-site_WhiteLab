// @flow

// ----------------------------------------------------------------------------
// Browser class
// ----------------------------------------------------------------------------

/**
 * Browser.
 * @class
 * @property {number } clientWidth
 * @property {number } clientHeight
 */
class Browser {
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     * @param {number } [clientWidth]
     * @param {number } [clientHeight]
     */
    constructor(clientWidth: number, clientHeight: number) {
        _set.call(_clientWidth, this, clientWidth);
        _set.call(_clientHeight, this, clientHeight);
    }

    // ------------------------------------------------------------------------
    // Public getters and setters.
    // ------------------------------------------------------------------------

    /**
     * Set browser client width.
     * @param {number} width Browser client width.
     */
    set clientWidth(width: number):void {
        _set.call(_clientWidth, this, width);
    }
    /**
     * Return browser client width.
     * @return {number} - Browser client height
     */
    get clientWidth():number {

        const clientWidth = _get.call(_clientWidth, this);

        if (typeof clientWidth !== "number") {
            throw new TypeError();
        }

        return clientWidth;
    }

    /**
     * Set browser client height.
     * @param {number} height Browser client height.
     */
    set clientHeight(height: number):void {
        _set.call(_clientHeight, this, height);
    }

    /**
     * Return browser client height.
     * @return {number}
     */
    get clientHeight():number {

        const clientHeight = _get.call(_clientHeight, this);

        if (typeof clientHeight !== "number") {
            throw new TypeError();
        }

        return clientHeight;
    }

}

// ----------------------------------------------------------------------------
// Private functions
// ----------------------------------------------------------------------------

/**
 * Gets _clientHeight & clientWidth class properties from WeakMap
 * @function
 * @return {*}
 * @private
 */
const _get = WeakMap.prototype.get;

/**
 * Stores _clientHeight & clientWidth class properties from WeakMap
 * @function
 * @return {*}
 * @private
 */
const _set = WeakMap.prototype.set;

// ----------------------------------------------------------------------------
// Private variables
// ----------------------------------------------------------------------------

/**
 * Stores browser client width.
 * @type {WeakMap}
 * @private
 */
const _clientWidth  = new WeakMap();

/**
 * Stores browser client height.
 * @type {WeakMap}
 * @private
 */
const _clientHeight = new WeakMap();

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

/**
 * sdfsdf
 */
class MyT {

    t:number;

    /**
     * @param t
     */
    constructor(t: number) {
        this.t = t;
    }

}

let n = new MyT("fsd");
export { Browser };

