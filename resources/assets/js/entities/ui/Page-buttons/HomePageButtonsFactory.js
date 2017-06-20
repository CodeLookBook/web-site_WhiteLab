//MODULES IMPORT --------------------------------------------------------------

import {EnglishHomePageButtons}
        from "./EnglishHomePageButtons";
import {TypeValidator}
        from "../../mixins/TypeValidator";
import {LanguagesEnum}
        from "../../languages/enum/LanguagesEnum";
import {EnglishHomePageButtonsSingleton}
        from "./EnglishHomePageButtonsSingleton";
import {RussianHomePageButtonsSingleton}
        from "./RussianHomePageButtonsSingleton";
import {SlovakHomePageButtonsSingleton}
        from "./SlovakHomePageButtonsSingleton";

//CLASS -----------------------------------------------------------------------

/**
 * TopNavbarButtonsFactory class.
 */
class HomePageButtonsFactory{

    //CONSTRUCTOR -------------------------------------------------------------

    /**
     * Creates a group of top navigation menu buttons.
     * @param {number | Number} languageId Language numeric identifier.
     * @return {EnglishHomePageButtons | RussianHomePageButtons | SlovakHomePageButtons}
     */
    create(languageId){

        // 'languageId' argument validation
        {
            if(languageId === null){
                throw new ReferenceError();
            }

            if(!(TypeValidator.isInteger(languageId))){
                throw new TypeError();
            }
        }

        let singleton   = null;

        // Create topNavbarButtons object.
        switch (languageId){
            case LanguagesEnum.ENGLISH.ID:
                singleton = new EnglishHomePageButtonsSingleton();
                break;
            case LanguagesEnum.RUSSIAN.ID:
                singleton = new RussianHomePageButtonsSingleton();
                break;
            case LanguagesEnum.SLOVAK.ID:
                singleton = new SlovakHomePageButtonsSingleton();
                break;
            default:
                throw new Error("Home page buttons can't be created. " +
                    "Specified language 'id' doesn't exists.");
        }

        // Object that contains all buttons related to home page(start page).
        let topNavbarButtons = singleton.create();

        return topNavbarButtons;
    }
}

// EXPORT ---------------------------------------------------------------------

export {HomePageButtonsFactory};
