// IMPORT MODULES -------------------------------------------------------------

import {SlovakButtonsFactory}
    from "../../buttons/concrete-factory/SlovakButtonsFactory";

// CLASS ----------------------------------------------------------------------

/**
 * SlovakTopNavbarButtons class.
 * Returns a group of buttons on English language that belongs to top
 * navigation menu.
 */
class SlovakTopNavbarButtons {

    constructor(slovakButtonsFactory){

        //'buttonsFactory' argument validation
        {
            if(slovakButtonsFactory === null){
                throw new ReferenceError();
            }

            if(!(slovakButtonsFactory instanceof SlovakButtonsFactory)){
                throw new TypeError();
            }
        }

        // public variable init
        {
            /**
             * @type {SlovakPriceButton}
             */
            this.priceButton     = slovakButtonsFactory.createPriceButton    ();

            /**
             * @type {SlovakOrderButton}
             */
            this.orderButton     = slovakButtonsFactory.createOrderButton    ();

            /**
             * @type {SlovakContactsButton}
             */
            this.contactButton   = slovakButtonsFactory.createContactButton  ();

            /**
             * @type {SlovakVacanciesButton}
             */
            this.vacanciesButton = slovakButtonsFactory.createVacanciesButton();

            /**
             * @type {SlovakFbShareButton}
             */
            this.fbShareButton   = slovakButtonsFactory.createFbShareButton  ();
        }
    }
}

// EXPORT ---------------------------------------------------------------------

export {SlovakTopNavbarButtons};
