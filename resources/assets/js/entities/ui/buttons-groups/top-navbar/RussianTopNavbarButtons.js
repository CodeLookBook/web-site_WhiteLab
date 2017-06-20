// IMPORT MODULES -------------------------------------------------------------

import {RussianButtonsFactory}
        from "../../buttons/concrete-factory/RussianButtonsFactory";

// CLASS ----------------------------------------------------------------------

/**
 * RussianTopNavbarButtons class.
 * Returns a group of buttons of the top-navbar on Russian language.
 */
class RussianTopNavbarButtons {

    constructor(russianButtonsFactory){

        //'buttonsFactory' argument validation
        {
            if(russianButtonsFactory === null){
                throw new ReferenceError();
            }

            if(!(russianButtonsFactory instanceof RussianButtonsFactory)){
                throw new TypeError();
            }
        }

        // public variable init
        {
            /**
             * @type {RussianPriceButton}
             */
            this.priceButton     = russianButtonsFactory.createPriceButton    ();

            /**
             * @type {RussianOrderButton}
             */
            this.orderButton     = russianButtonsFactory.createOrderButton    ();

            /**
             * @type {RussianContactButton}
             */
            this.contactButton   = russianButtonsFactory.createContactButton  ();

            /**
             * @type {RussianVacanciesButton}
             */
            this.vacanciesButton = russianButtonsFactory.createVacanciesButton();

            /**
             * @type {RussianFbShareButton}
             */
            this.fbShareButton   = russianButtonsFactory.createFbShareButton  ();
        }
    }
}

// EXPORT ---------------------------------------------------------------------

export {RussianTopNavbarButtons};


