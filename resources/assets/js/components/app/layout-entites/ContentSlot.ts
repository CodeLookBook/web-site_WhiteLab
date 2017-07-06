import {LayoutMediator} from "./LayoutMediator";
import {DomElement} from "../../../global-abstarct-classes/DomElement";

// ---------------------------------------------------------------------------
// ContentSlot class
// ---------------------------------------------------------------------------

/**
 * - Represents '.CONTENT-SLOT' HTML DOM element;
 * - Gives simple API that helps to get element description information;
 * - Implements 'Facade' pattern.
 * - Implements Singleton pattern structure;
 */
class ContentSlot extends DomElement{

    // ------------------------------------------------------------------------
    // Properties.
    // ------------------------------------------------------------------------

    /**
     * Singleton pattern instance.
     */
    private static _instance: ContentSlot | null = null;

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    /**
     * @param el - HTML DOM element that represents slot for the Component.
     * @param mediator - Instance that manages requests between slots.
     * @return {ContentSlot}
     */
    protected constructor(el:HTMLElement, mediator: LayoutMediator){
        super(el, mediator);
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Creates ContentSlot instance.
     * @param el       - HTML DOM element.
     * @param mediator - Instance that manages requests between slots.
     * @return         - Instance that represents HTML DOM element: '.CONTENT-SLOT'
     */
    private static create(el:HTMLElement, mediator: LayoutMediator):
        ContentSlot | never {

        return new ContentSlot(el, mediator);
    }

    /**
     * Returns ContentSlot instance.
     * @param el       - HTML DOM element '.CONTENT-SLOT'
     * @param mediator - Instance that manages requests between slots.
     * @return         - Singleton pattern instance.
     */
    static getInstance(el: HTMLElement, mediator: LayoutMediator):
        ContentSlot | never {

        //Create instance.
        if(ContentSlot._instance === null){
            ContentSlot._instance = ContentSlot.create(el, mediator);
        }

        //If '_instance' still equal to 'null' throw exception.
        if(ContentSlot._instance === null){
            throw new ReferenceError();
        }

        return ContentSlot._instance;
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ContentSlot};
