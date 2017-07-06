import {BrowserClientHeightChanged} from "../events/BrowserClientHeightChanged";
import {UnmodifiedBrowserClientHeightState} from "./UnmodifiedBrowserClientHeightState";
import {IHeightPx} from "../../global-interfaces/IHeightPx";
import {Observable} from "../../global-abstarct-classes/Observable";
import {Observers} from "../types/Observers";
import {ObservableState} from "../../global-abstarct-classes/ObservableState";

// ----------------------------------------------------------------------------
// ModifiedState class.
// ----------------------------------------------------------------------------

/** - Used in BrowserClientHeight and BrowserClientWidth classes as object
 *   that stores object 'state' and manages object behavior;
 * - Class is a part of the "State" pattern;
 */
class ModifiedBrowserClientHeightState extends ObservableState<IHeightPx,
    BrowserClientHeightChanged>{

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     * @param newHeight - New state value.
     * @param oldHeight - Old tate value.
     * @param observers - List of observers.
     * @param owner     - Ref. to the owner of the current 'state' object.
     */
    constructor(
        newHeight: IHeightPx,
        oldHeight: IHeightPx,
        observers: Observers<BrowserClientHeightChanged>,
        owner    : Observable<IHeightPx, BrowserClientHeightChanged>){

        super(newHeight, oldHeight, observers, owner);
        this.notify();
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Changes 'state' property in 'Observable' instance (owner).
     *
     * @param newHeight - New state value.
     * @param oldHeight - Old tate value.
     * @param observers - List of observers.
     * @param owner     - Ref. to the owner of the current 'state' object.
     */
    protected changeState(
        newHeight: IHeightPx,
        oldHeight: IHeightPx,
        observers: Observers<BrowserClientHeightChanged>,
        owner    : Observable<IHeightPx, BrowserClientHeightChanged>): void {

        if (this.new.value === newHeight.value) {

            // Change owner instance state to 'unmodified'.
            this.owner.state = new UnmodifiedBrowserClientHeightState(
                this.new,
                this.old,
                this.observers,
                this.owner    ,
            );
        } else {

            // Change owner instance state to 'modified'.
            this.owner.state = new ModifiedBrowserClientHeightState(
                newHeight,
                oldHeight,
                observers,
                owner    ,
            )
        }
    }

    /**
     * Creates Event class object that will be sent to subscribers.
     */
    public createEvent(): BrowserClientHeightChanged {

        const newClientHeight: IHeightPx = {...this.new};
        const oldClientHeight: IHeightPx = {...this.old};

        //TODO: Создать Фабрику событий. Заменить BrowserClientHeightChanged.
        return new BrowserClientHeightChanged(newClientHeight, oldClientHeight)
    }

    /**
     * Notify subscribers about changes;
     */
    public notify(): void {

        const length: number = this.observers.length;

        if(length > 0){

            const event: BrowserClientHeightChanged = this.createEvent();
            this.observers.forEach(func => func(event));
        }
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ModifiedBrowserClientHeightState};
