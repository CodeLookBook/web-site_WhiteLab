import {BrowserClientHeightChanged} from "../events/BrowserClientHeightChanged";
import {ModifiedBrowserClientHeightState} from "../states/ModifiedBrowserClientHeightState";
import {Observable} from "../../global-abstarct-classes/Observable";
import {IHeightPx} from "../../global-interfaces/IHeightPx";

// ----------------------------------------------------------------------------
// BrowserClientHeight class.
// ----------------------------------------------------------------------------

/**
 * - Send browser client height value to  it's observers.
 * - Implements "Observer" pattern;
 * - Implements pattern: "Singleton";
 */
class BrowserClientHeight extends Observable <IHeightPx,
    BrowserClientHeightChanged>{

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    /**
     * Unique single instance of the BrowserClientHeight class.
     */
    private static _instance: BrowserClientHeight | null = null;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    constructor(){
        super();

        const clientHeight: IHeightPx = this.getClientHeight();
        this.state = new ModifiedBrowserClientHeightState(this, clientHeight, []);

        window.addEventListener('resize', this.windowResizeHandler.bind(this));
    }

    // ------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------

    /**
     * Creates new BrowserClientHeight instance.
     * @return {BrowserClientHeight}
     */
    private static _create(): BrowserClientHeight{
        return new BrowserClientHeight();
    }

    /**
     * Creates new or returns to client existing BrowserClientHeight instance.
     * @return {BrowserClientHeight|null}
     * @throws {ReferenceError}  If 'BrowserClientHeight' class instance wasn't
     *                           created.
     */
    static  getInstance(): BrowserClientHeight | never {

        if(BrowserClientHeight._instance === null){
            BrowserClientHeight._instance = BrowserClientHeight._create();
        }

        if(BrowserClientHeight._instance === null){
            throw new ReferenceError("BrowserClientHeight instance wasn't " +
                "created.")
        }

        return BrowserClientHeight._instance;
    }

    /**
     * Gets window client height, px.
     * @return {number} - client height, px.
     * @private
     */
    private getClientHeight(): IHeightPx {
        return {
            value  :  window.document.documentElement.clientHeight ||
                      window.document.body.clientHeight,
            measure: 'px'
        };
    }


    /**
     * Creates Event class object that will be sent to subscribers.
     *
     * @return {BrowserClientHeightChanged}
     * @override
     */
    protected createEvent(): BrowserClientHeightChanged {

        const newClientHeight: IHeightPx = {...this.state.new};
        const oldClientHeight: IHeightPx = {...this.state.old};

        //TODO: Создать Фабрику событий. Заменить BrowserClientHeightChanged.
        return new BrowserClientHeightChanged(newClientHeight, oldClientHeight);
    }

    /**
     * Window resize handler.
     *
     * Change BrowserClientHeight instance 'state' property.
     * @private
     */
    private windowResizeHandler(): void{

        const newClientHeight: IHeightPx = this.getClientHeight();
        this.state.handleNewValue(newClientHeight);
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {BrowserClientHeight};