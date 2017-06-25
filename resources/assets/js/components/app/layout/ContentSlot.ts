/**---------------------------------------------------------------------------
 * ContentSlot class
 * ---------------------------------------------------------------------------
 * - Represents '.CONTENT-SLOT' HTML DOM element;
 * - Gives simple API that helps to get element description information;
 * - Implements Singleton pattern structure;
 */
class ContentSlot extends DomElement{

    // ------------------------------------------------------------------------
    // Properties.
    // ------------------------------------------------------------------------

    /**
     * Singleton pattern instance.
     */
    protected static _instance: ContentSlot | null = null;

    // ------------------------------------------------------------------------
    // Constructor.
    // ------------------------------------------------------------------------

    constructor(el: HTMLElement){
        super(el);
    }

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    /**
     * Creates ContentSlot instance.
     * @param el - HTML DOM element.
     * @return {ContentSlot}
     */
    private static create(el: HTMLElement): ContentSlot {
        return new ContentSlot(el);
    }

    /**
     * Returns ContentSlot instance.
     * @param el  - HTML DOM element '.CONTENT-SLOT'
     * @return    - Singleton pattern instance.
     */
    static getInstance(el: HTMLElement): ContentSlot{

        //Create instance.
        if(ContentSlot._instance === null){
            ContentSlot._instance = ContentSlot.create(el);
        }

        //If '_instance' still equal to 'null' throw exception.
        if(ContentSlot._instance === null){
            throw new ReferenceError();
        }

        return ContentSlot._instance;
    }
}
