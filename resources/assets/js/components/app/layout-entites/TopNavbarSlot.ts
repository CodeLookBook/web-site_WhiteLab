import {LayoutMediator} from "./LayoutMediator";
import {DomElement} from "./DomElement";

/**---------------------------------------------------------------------------
 * TopNavbarSlot class
 * ---------------------------------------------------------------------------
 * - Represents '.TOP-NAVBAR-SLOT' HTML DOM element;
 * - Gives simple API that helps to get DOM element description information;
 * - Implements Singleton pattern structure;
 */
class TopNavbarSlot extends DomElement{

    // ------------------------------------------------------------------------
    // Properties.
    // ------------------------------------------------------------------------

    /**
     * Singleton pattern instance.
     */
    private static _instance: TopNavbarSlot | null = null;

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param el       - HTML DOM element.
     * @param mediator - 'LayoutMediator' instance.
     */
    constructor(el: HTMLElement, mediator: LayoutMediator){
        super(el, mediator);
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Creates TopNavbarSlot instance.
     * @param el - HTML DOM element.
     * @param mediator - Instance that manages requests between slots.
     * @return {TopNavbarSlot}
     */
    private static create(el: HTMLElement, mediator: LayoutMediator): TopNavbarSlot {
        return new TopNavbarSlot(el, mediator);
    }

    /**
     * Returns TopNavbarSlot instance.
     * @param el  - HTML DOM element '.TOP-NAVBAR-SLOT'
     * @param mediator - Instance that manages requests between slots.
     * @return    - Singleton pattern instance.
     */
    static getInstance(el: HTMLElement, mediator: LayoutMediator): TopNavbarSlot{

        //Create instance.
        if(TopNavbarSlot._instance === null){
            TopNavbarSlot._instance = TopNavbarSlot.create(el, mediator);
        }

        //If '_instance' still equal to 'null' throw exception.
        if(TopNavbarSlot._instance === null){
            throw new ReferenceError();
        }

        return TopNavbarSlot._instance;
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {TopNavbarSlot};
