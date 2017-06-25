/**---------------------------------------------------------------------------
 * MainContentSlot class
 * ---------------------------------------------------------------------------
 * - Represents .mainContentSlot HTML DOM element;
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
    protected static _instance: MainContentSlot | null = null;

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
     * Creates MainContentSlot instance.
     * @param el - HTML DOM element.
     * @return {MainContentSlot}
     */
    private static create(el: HTMLElement): MainContentSlot {
        return new MainContentSlot(el);
    }

    /**
     * Returns MainContentSlot instance.
     * @param el  - HTML DOM element '.MAIN-CONTENT-SLOT'
     * @return    - Singleton pattern instance.
     */
    static getInstance(el: HTMLElement): MainContentSlot{

        //Create instance.
        if(MainContentSlot._instance === null){
            MainContentSlot._instance = MainContentSlot.create(el);
        }

        //If '_instance' still equal to 'null' throw exception.
        if(MainContentSlot._instance === null){
            throw new ReferenceError();
        }

        return MainContentSlot._instance;
    }
}


