import {ModifiedBrowserClientWidthState} from "./ModifiedBrowserClientWidthState";
import {BrowserClientWidthChanged      } from "../events/BrowserClientWidthChanged";
import {IWidthPx} from "../../global-interfaces/IWidthPx";
import {ObservableState} from "../../global-abstarct-classes/ObservableState";
import {Observable} from "../../global-abstarct-classes/Observable";
import {Observers} from "../types/Observers";

// ----------------------------------------------------------------------------
// UnmodifiedState class.
// ----------------------------------------------------------------------------

/** - Used in BrowserClientHeight or BrowserClientWidth classes as object
 *   that stores object 'state' data;
 * - Class is a part of the "State" pattern;
 */
class UnmodifiedBrowserClientWidthState extends ObservableState<IWidthPx,
    BrowserClientWidthChanged>{

    /**
     * @param owner - Reference to the state object owner.
     * @param value - New value of the state.
     * @param observers - List of observers.
     */
    constructor(owner: Observable<IWidthPx, BrowserClientWidthChanged>,
                value: IWidthPx,
                observers: Observers<BrowserClientWidthChanged>){

        super(owner, value, observers);

        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         *   Must not invoke 'this.fire();' here.                          *
         *   Forbidden behavior for this class.                            *
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
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

        if (this.new.value !== newWidth.value) {
            this.owner.state = new ModifiedBrowserClientWidthState(
                this.owner,
                newWidth,
                this.observers
            );
            this.notify();
        }
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {UnmodifiedBrowserClientWidthState};