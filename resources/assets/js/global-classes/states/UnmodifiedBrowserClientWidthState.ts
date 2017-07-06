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

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Changes 'state' property in 'Observable' instance (owner).
     * @param newValue
     * @param oldValue
     * @param observers
     * @param owner
     */
    protected changeState(
        newValue: IWidthPx,
        oldValue: IWidthPx,
        observers: Observers<BrowserClientWidthChanged>,
        owner: Observable<IWidthPx, BrowserClientWidthChanged>): void {

        if (this.new.value !== newValue.value) {
            this.owner.state = new ModifiedBrowserClientWidthState(
                newValue,
                oldValue,
                observers,
                owner,
            );
        } else {
            this.owner.state = new UnmodifiedBrowserClientWidthState(
                this.new      ,
                this.old      ,
                this.observers,
                this.owner    ,
            )
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
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {UnmodifiedBrowserClientWidthState};