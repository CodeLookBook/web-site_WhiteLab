// @flow

/**
 * Browser.
 * @class
 * @property {number } clientWidth
 * @property {number } clientHeight
 */
class Browser {
    /**
     * @param {number } clientWidth
     * @param {number } clientHeight
     */
    constructor(clientWidth: number, clientHeight: number) {
        _set.call(_clientWidth, this, clientWidth);
        _set.call(_clientHeight, this, clientHeight);
    }

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
        return _get.call(_clientWidth, this);
    }

    /**
     * Set browser client height.
     * @param {number} height Browser client height.
     */
    set clientHeight(height: number):void {
        _set.call(_clientHeight, this);
    }
    /**
     * Return browser client height.
     * @return {number}
     */
    get clientHeight():number {
        return _get.call(_clientHeight, this);
    }
}

/**
 * Gets _clientHeight & clientWidth class properties from WeakMap
 * @function
 * @return {number}
 * @private
 */
const _get = WeakMap.prototype.get;

/**
 * Stores _clientHeight & clientWidth class properties from WeakMap
 * @function
 * @return {number}
 * @private
 */
const _set = WeakMap.prototype.set;

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

export { Browser };
