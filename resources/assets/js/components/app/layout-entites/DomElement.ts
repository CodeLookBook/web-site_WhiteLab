import EventNames from "./MediatorEventNames";
import {LayoutMediator} from "./LayoutMediator";
import {Colleague} from "../../../global-abstarct-classes/Colleague";
import {IHeightPx} from "../../../global-interfaces/IHeightPx";
import {IWidthPx} from "../../../global-interfaces/IWidthPx";

// ----------------------------------------------------------------------------
// DomElement abstract class.
// ----------------------------------------------------------------------------
/**
 * Abstract wrapper that provides simple API that helps to
 * get element description information;
 */
class DomElement extends Colleague<EventNames> {

    // ------------------------------------------------------------------------
    // Properties.
    // ------------------------------------------------------------------------

    /**
     * Object that represents HTML DOM element.
     */
    private readonly _el: HTMLElement;

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param el       - HTML DOM element.
     * @param mediator - 'LayoutMediator' instance.
     */
    constructor(el: HTMLElement, mediator: LayoutMediator){
        super(mediator);
        this._el = el;
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Set HTML DOM HTMLElement height.
     * @param height
     */
    set height(height: IHeightPx){
        this._el.style.height = height.value + height.measure;

        this._mediator.send(EventNames.HeightChanged, this);
    }

    /**
     * Get HTML DOM Element height.
     * @return {{height: number, unitMeasureName: string}} - Height is
     * calculated based on bounding client rectangle.
     */
    get height(): IHeightPx {

        const rectangle: ClientRect = this._el.getBoundingClientRect();
        return {
            value: Math.abs(rectangle.bottom - rectangle.top),
            measure: 'px'
        };
    }

    /**
     * Set HTML DOM Element height.
     * @param width
     */
    set width(width: IWidthPx){
        this._el.style.width = width.value + width.measure;

        this._mediator.send(EventNames.WidthChanged, this);
    }

    /**
     * Get HTML DOM Element width.
     * @return {{height: number, unitMeasureName: string}} - Width is
     *          calculated based on bounding client rectangle.
     */
    get width(): IWidthPx{

        const rectangle: ClientRect = this._el.getBoundingClientRect();
        return {
            value: Math.abs(rectangle.right - rectangle.left),
            measure: 'px'
        };
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {DomElement};