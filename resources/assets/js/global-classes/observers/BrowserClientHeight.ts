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

        // Init. new class state.
        {
            const newClientHeight: IHeightPx = this.getClientHeight()   ;
            const oldClientHeight: IHeightPx = {value: 0, measure: "px"};

            this.state = new ModifiedBrowserClientHeightState(
                newClientHeight,
                oldClientHeight,
                [],
                this
            );
        }

        // Subscribe on window 'resize' event.
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

    protected createEvent(): BrowserClientHeightChanged {
        return this.state.createEvent();
    }

    /**
     * Notify subscribers about changes;
     */
    public notify(): void {

        if(this.state instanceof ModifiedBrowserClientHeightState) {
            this.state.notify();
        }
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