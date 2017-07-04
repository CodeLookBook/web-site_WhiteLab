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
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param owner     - Reference to the state object owner.
     * @param value     - New value of the state.
     * @param observers - List of observers.
     */
    constructor(owner: Observable<IWidthPx, BrowserClientWidthChanged>,
                value: IWidthPx,
                observers: Observers<BrowserClientWidthChanged>) {

        super(owner, value, observers);
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Changes 'state' property in 'Observable' instance (owner).
     *
     * @param newWidth - State value.
     * @override
     */
    protected changeState(newWidth: IWidthPx): void {

        if (this.new.value === newWidth.value) {

            // Change owner state to  'Unmodified'.
            this.owner.state = new UnmodifiedBrowserClientWidthState(
                this.owner,
                newWidth,
                this.observers
            );
        } else {

            // Update current state
            this.new.value = newWidth.value;

            // Notify subscribers
            this.notify();
        }
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ModifiedBrowserClientWidthState};
