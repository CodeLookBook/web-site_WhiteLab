/**
 * Browser class.
 *
 * @property {number | Number } clientWidth Browser client width.
 * @property {number | Number } clientHeight Browser client height.
 */

class Browser {
    /**
     * @param {number | Number } clientWidth Browser client width.
     * @param {number | Number } clientHeight Browser client height.
     */
    constructor(clientWidth = null, clientHeight = null){
        this.clientWidth = clientWidth;
        this.clientHeight= clientHeight;
    }
}

export { Browser }
