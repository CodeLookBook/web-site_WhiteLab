/**----------------------------------------------------------------------------
 * DomElement abstract class.
 * ----------------------------------------------------------------------------
 *  - Abstract wrapper that provides simple API that helps to
 *    get element description information;
 */
abstract class DomElement{

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param el - HTML DOM element
     */
    protected constructor(el: HTMLElement){
        this._el = el;
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Object that represents HTML DOM element.
     */
    private readonly _el: HTMLElement;

    /**
     * Set HTML DOM Element height.
     * @param params
     */
    set height(params: {height: number, readonly unitMeasureName: string}){
        this._el.style.height = params.height + params.unitMeasureName;
    }

    /**
     * Get HTML DOM Element height.
     * @return {{height: number, unitMeasureName: string}} - Height is
     * calculated based on bounding client rectangle.
     */
    get height(): {height: number, readonly unitMeasureName: string}{

        const rectangle: ClientRect = this._el.getBoundingClientRect();
        return {
            height: Math.abs(rectangle.bottom - rectangle.top),
            unitMeasureName: 'px'
        };
    }

    /**
     * Set HTML DOM Element height.
     * @param params
     */
    set width(params: {width: number, readonly unitMeasureName: string}){
        this._el.style.width = params.width + params.unitMeasureName;
    }

    /**
     * Get HTML DOM Element width.
     * @return {{height: number, unitMeasureName: string}} - Width is
     *          calculated based on bounding client rectangle.
     */
    get width(): {width: number,readonly unitMeasureName: string}{

        const rectangle: ClientRect = this._el.getBoundingClientRect();
        return {
            width: Math.abs(rectangle.right - rectangle.left),
            unitMeasureName: 'px'
        };
    }

}