import {BrowserClientWidthChanged} from "../events/BrowserClientWidthChanged";
import {ModifiedBrowserClientWidthState} from "../states/ModifiedBrowserClientWidthState";
import {Observable} from "../../global-abstarct-classes/Observable";
import {IWidthPx} from "../../global-interfaces/IWidthPx";

// ----------------------------------------------------------------------------
// BrowserClientWidth class.
// ----------------------------------------------------------------------------

/** - Send browser client width value to  it's observers.
 * - Implements pattern: "Observer";
 * - Implements pattern: "Singleton";
 */
class BrowserClientWidth extends Observable <IWidthPx, BrowserClientWidthChanged> {

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    /**
     * Unique single instance of the BrowserClientWidth class.
     * @static
     */
    private static _instance: BrowserClientWidth | null = null;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    constructor(){
        super();

        const clientWidth: IWidthPx = this.getClientWidth();
        this.state = new ModifiedBrowserClientWidthState( this, clientWidth,[]);

        window.addEventListener('resize', this.windowResizeHandler.bind(this));
    }

    // ------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------

    /**
     * Creates new BrowserClientWidth instance.
     * This method is a part of the "Singleton" pattern, that was implemented
     * in this class.
     *
     * @return {BrowserClientWidth}
     * @static
     */
    private static _create(): BrowserClientWidth {
        return new BrowserClientWidth();
    }

    /**
     * Creates new or returns to client existing BrowserClientWidth instance.
     * This method is a part of the "Singleton" pattern, that was implemented
     * in this class.
     *
     * @return {BrowserClientWidth|null}
     * @throws {ReferenceError}  If 'BrowserClientWidth' class instance wasn't
     *                           created.
     */
    static getInstance(): BrowserClientWidth | never {

        if(BrowserClientWidth._instance === null){
            BrowserClientWidth._instance = BrowserClientWidth._create();
        }

        if(BrowserClientWidth === null){
            throw new ReferenceError("BrowserClientWidth instance wasn't " +
                "created.");
        }

        return BrowserClientWidth._instance;
    }

    /**
     * Gets window client width, px.
     * @return {number} - client width, px.
     * @private
     */
    private getClientWidth(): IWidthPx {
        return {
            value  : window.document.documentElement.clientWidth ||
                     window.document.body.clientWidth,
            measure: 'px'
        }
    }

    /**
     * Creates Event class object that will be sent to subscribers.
     *
     * @return {BrowserClientWidthChanged}
     * @override
     */
    protected createEvent(): BrowserClientWidthChanged {

        const newClientWidth: IWidthPx = {...this.state.new};
        const oldClientWidth: IWidthPx = {...this.state.old};

        //TODO: Создать Фабрику событий. Заменить BrowserClientWidthChanged
        return (new BrowserClientWidthChanged(newClientWidth, oldClientWidth));
    }

    /**
     * Window resize handler.
     * Change BrowserClientWidth instance 'state' property.
     * @private
     */
    private windowResizeHandler(): void{

        const newClientWidth: IWidthPx = this.getClientWidth();
        this.state.handleNewValue(newClientWidth);
    }
}


// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {BrowserClientWidth};