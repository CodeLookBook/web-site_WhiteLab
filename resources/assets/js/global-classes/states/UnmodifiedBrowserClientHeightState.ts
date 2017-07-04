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

    /**
     * @param owner     - Reference to the state object owner.
     * @param newHeight - New value of the state.
     * @param observers - List of observers.
     */
    constructor(owner    : Observable<IHeightPx, BrowserClientHeightChanged>,
                newHeight: IHeightPx,
                observers: Observers<BrowserClientHeightChanged>){

        super(owner, newHeight, observers);

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         *   Must not invoke 'this.notify();' here.                          *
         *   Forbidden behavior for this class.                            *
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Changes 'state' property in 'Observable' instance (owner).
     *
     * @param newHeight - State value.
     */
    protected changeState(newHeight: IHeightPx): void {

        if (this.new.value !== newHeight.value) {
            this.owner.state = new ModifiedBrowserClientHeightState(
                this.owner,
                newHeight,
                this.observers
            );
            this.notify();
        }
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {UnmodifiedBrowserClientHeightState};