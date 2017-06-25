abstract class DomElement{

    /**
     * Object that represents HTML DOM element.
     */
    private readonly _el: HTMLElement;

    /**
     * @param el - HTML DOM element
     */
    constructor(el: HTMLElement){
        this._el = el;
    }

    /**
     * @return height - Height is calculated based on bounding client rectangle.
     */
    get height(): number{

        const rectangle: ClientRect = this._el.getBoundingClientRect();
        return Math.abs(rectangle.bottom - rectangle.top);
    }

    /**
     * @return width - Width is calculated based on bounding client rectangle.
     */
    get width(): number{

        const rectangle: ClientRect = this._el.getBoundingClientRect();
        return Math.abs(rectangle.right - rectangle.left);
    }

}