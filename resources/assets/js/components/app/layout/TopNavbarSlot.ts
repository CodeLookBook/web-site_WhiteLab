/**---------------------------------------------------------------------------
 * TopNavbarSlot class
 * ---------------------------------------------------------------------------
 * - Represents '.TOP-NAVBAR-SLOT' HTML DOM element;
 * - Gives simple API that helps to get element description information;
 * - Implements Singleton pattern structure;
 */
class TopNavbarSlot extends DomElement{

    // ------------------------------------------------------------------------
    // Properties.
    // ------------------------------------------------------------------------

    /**
     * Singleton pattern instance.
     */
    protected static _instance: TopNavbarSlot | null = null;

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
     * Creates TopNavbarSlot instance.
     * @param el - HTML DOM element.
     * @return {TopNavbarSlot}
     */
    private static create(el: HTMLElement): TopNavbarSlot {
        return new TopNavbarSlot(el);
    }

    /**
     * Returns TopNavbarSlot instance.
     * @param el  - HTML DOM element '.TOP-NAVBAR-SLOT'
     * @return    - Singleton pattern instance.
     */
    static getInstance(el: HTMLElement): TopNavbarSlot{

        //Create instance.
        if(TopNavbarSlot._instance === null){
            TopNavbarSlot._instance = TopNavbarSlot.create(el);
        }

        //If '_instance' still equal to 'null' throw exception.
        if(TopNavbarSlot._instance === null){
            throw new ReferenceError();
        }

        return TopNavbarSlot._instance;
    }
}
