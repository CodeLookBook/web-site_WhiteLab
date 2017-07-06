import {LayoutMediator} from "./LayoutMediator";
import {DomElement} from "../../../global-abstarct-classes/DomElement";

/**---------------------------------------------------------------------------
 * MainContentSlot class
 * ---------------------------------------------------------------------------
 * - Represents .MAIN-CONTENT-SLOT HTML DOM element;
 * - Gives simple API that helps to get element description information;
 * - Implements Singleton pattern structure;
 */
class MainContentSlot extends DomElement{

    // ------------------------------------------------------------------------
    // Properties.
    // ------------------------------------------------------------------------

    /**
     * Singleton pattern instance.
     */
    private static _instance: MainContentSlot | null = null;

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param el       - HTML DOM element.
     * @param mediator - 'LayoutMediator' instance.
     */
    protected constructor(el: HTMLElement, mediator: LayoutMediator){
        super(el, mediator);
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Creates MainContentSlot instance.
     * @param el - HTML DOM element.
     * @param mediator - Instance that manages requests between slots.
     * @return {MainContentSlot}
     */
    private static create(el: HTMLElement, mediator: LayoutMediator):
        MainContentSlot | never {

        return new MainContentSlot(el, mediator);
    }

    /**
     * Returns MainContentSlot instance.
     * @param el  - HTML DOM element '.MAIN-CONTENT-SLOT'
     * @param mediator - Instance that manages requests between slots.
     * @return    - Singleton pattern instance.
     */
    static getInstance(el: HTMLElement, mediator: LayoutMediator):
        MainContentSlot | never {

        //Create instance.
        if(MainContentSlot._instance === null){
            MainContentSlot._instance = MainContentSlot.create(el, mediator);
        }

        //If '_instance' still equal to 'null' throw exception.
        if(MainContentSlot._instance === null){
            throw new ReferenceError();
        }

        return MainContentSlot._instance;
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {MainContentSlot};

