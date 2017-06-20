// IMPORT MODULES -------------------------------------------------------------

import {EnglishButtonsFactory}
    from "../../buttons/concrete-factory/EnglishButtonsFactory";

// CLASS ----------------------------------------------------------------------

/**
 * EnglishTopNavbarButtons class.
 * Returns a group of buttons of the top-navbar on English language.
 */
class EnglishTopNavbarButtons {

    constructor(englishButtonsFactory){

        //'buttonsFactory' argument validation
        {
            if(englishButtonsFactory === null){
                throw new ReferenceError();
            }

            if(!(englishButtonsFactory instanceof EnglishButtonsFactory)){
                throw new TypeError();
            }
        }

        // public variable init
        {

            /**
             * @type {EnglishPriceButton}
             */
            this.priceButton     = englishButtonsFactory.createPriceButton    ();

            /**
             * @type {EnglishOrderButton}
             */
            this.orderButton     = englishButtonsFactory.createOrderButton    ();

            /**
             * @type {EnglishContactButton}
             */
            this.contactButton   = englishButtonsFactory.createContactButton  ();

            /**
             * @type {EnglishVacanciesButton}
             */
            this.vacanciesButton = englishButtonsFactory.createVacanciesButton();

            /**
             * @type {EnglishFbShareButton}
             */
            this.fbShareButton   = englishButtonsFactory.createFbShareButton  ();
        }
    }
}

// EXPORT ---------------------------------------------------------------------

export {EnglishTopNavbarButtons};

