import {BrowserClientHeightChanged      } from "../events/BrowserClientHeightChanged";
import {ModifiedBrowserClientHeightState} from "./ModifiedBrowserClientHeightState";
import {IHeightPx} from "../../global-interfaces/IHeightPx";
import {Observers} from "../types/Observers";
import {Observable} from "../../global-abstarct-classes/Observable";
import {ObservableState} from "../../global-abstarct-classes/ObservableState";

// ----------------------------------------------------------------------------
// UnmodifiedState class.
// ----------------------------------------------------------------------------

/** - Used in BrowserClientHeight or BrowserClientWidth classes as object
 *   that stores object 'state' data;
 * - Class is a part of the "State" pattern;
 */
class UnmodifiedBrowserClientHeightState extends ObservableState<IHeightPx,
    BrowserClientHeightChanged>{

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     *
     * @param newValue  - New state value.
     * @param oldValue  - Old state value.
     * @param observers - List of observers or empty array.
     * @param owner     - Ref. to state owner object.
     */
    protected changeState(
        newValue : IHeightPx,
        oldValue : IHeightPx,
        observers: Observers<BrowserClientHeightChanged>,
        owner    : Observable<IHeightPx, BrowserClientHeightChanged>): void {

        // Change state.
        if (this.new.value !== newValue.value) {
            this.owner.state = new ModifiedBrowserClientHeightState(
                newValue ,
                oldValue ,
                observers,
                owner    ,
            );
        } else {
            this.owner.state = new UnmodifiedBrowserClientHeightState(
                this.new ,
                this.old,
                this.observers,
                this.owner    ,
            );
        }
    }

    /**
     * Creates Event class object that will be sent to subscribers.
     */
    public createEvent(): BrowserClientHeightChanged {

        const newClientHeight: IHeightPx = {...this.new};
        const oldClientHeight: IHeightPx = {...this.old};

        //TODO: Создать Фабрику событий. Заменить BrowserClientHeightChanged.
        return new BrowserClientHeightChanged(newClientHeight, oldClientHeight);
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {UnmodifiedBrowserClientHeightState};