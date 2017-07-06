import {BrowserClientWidthChanged} from "../events/BrowserClientWidthChanged";
import {UnmodifiedBrowserClientWidthState} from "./UnmodifiedBrowserClientWidthState";
import {ObservableState} from "../../global-abstarct-classes/ObservableState";
import {Observable} from "../../global-abstarct-classes/Observable";
import {IWidthPx} from "../../global-interfaces/IWidthPx";
import {Observers} from "../types/Observers";

// ----------------------------------------------------------------------------
// ModifiedState class.
// ----------------------------------------------------------------------------

/** - Used in BrowserClientHeight and BrowserClientWidth classes as object
 *   that stores object 'state' and manages object behavior;
 * - Class is a part of the "State" pattern;
 */
class ModifiedBrowserClientWidthState extends ObservableState<IWidthPx,
    BrowserClientWidthChanged>{

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     * @param newWidth - New state value.
     * @param oldWidth - Old tate value.
     * @param observers - List of observers.
     * @param owner     - Ref. to the owner of the current 'state' object.
     */
    constructor(
        newWidth: IWidthPx,
        oldWidth: IWidthPx,
        observers: Observers<BrowserClientWidthChanged>,
        owner    : Observable<IWidthPx, BrowserClientWidthChanged>){

        super(newWidth, oldWidth, observers, owner);
        this.notify();
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Changes 'state' property in 'Observable' instance (owner).
     * @param newValue  - New State value.
     * @param oldValue  - Old state value.
     * @param observers - Array of observers.
     * @param owner     - Ref. to state owner object.
     */
    protected changeState(
        newValue : IWidthPx,
        oldValue : IWidthPx,
        observers: Observers<BrowserClientWidthChanged>,
        owner    : Observable<IWidthPx, BrowserClientWidthChanged>): void {

        if (this.new.value === newValue.value) {

            // Change owner state to  'Unmodified'.
            this.owner.state = new UnmodifiedBrowserClientWidthState(
                this.new      ,
                this.old      ,
                this.observers,
                this.owner    ,
            );
        } else {

            // Create new modified state.
            this.owner.state = new ModifiedBrowserClientWidthState(
                newValue ,
                oldValue ,
                observers,
                owner    ,
            );
        }
    }

    /**
     * Creates Event class object that will be sent to subscribers.
     */
    public createEvent(): BrowserClientWidthChanged {

        const newClientWidth: IWidthPx = {...this.new};
        const oldClientWidth: IWidthPx = {...this.old};

        //TODO: Создать Фабрику событий. Заменить BrowserClientWidthChanged.
        return new BrowserClientWidthChanged(newClientWidth, oldClientWidth)
    }

    /**
     * Notify subscribers about changes;
     */
    public notify(): void {

        const length: number = this.observers.length;

        if(length > 0){

            const event: BrowserClientWidthChanged = this.createEvent();
            this.observers.forEach(func => func(event));
        }
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ModifiedBrowserClientWidthState};
