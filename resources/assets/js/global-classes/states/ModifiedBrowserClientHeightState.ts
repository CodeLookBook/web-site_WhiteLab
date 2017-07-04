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
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param owner     - Reference to the state object owner.
     * @param newHeight - New value of the state.
     * @param observers - List of observers.
     */
    constructor(owner    : Observable<IHeightPx, BrowserClientHeightChanged>,
                newHeight: IHeightPx,
                observers: Observers<BrowserClientHeightChanged>) {

        super(owner, newHeight, observers);
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

        if (this.new.value === newHeight.value) {

            //Change owner instance state.
            this.owner.state = new UnmodifiedBrowserClientHeightState(
                this.owner,
                newHeight,
                this.observers
            );
        } else {

            // Update state.
            this.new.value = newHeight.value;

            // Notify subscribers.
            this.notify();
        }
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ModifiedBrowserClientHeightState};
