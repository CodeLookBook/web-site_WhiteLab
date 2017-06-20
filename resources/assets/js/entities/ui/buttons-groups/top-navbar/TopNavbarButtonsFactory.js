//MODULES IMPORT --------------------------------------------------------------

import {TypeValidator}
        from "../../../mixins/TypeValidator";
import {LanguagesEnum}
        from "../../../languages/enum/LanguagesEnum";
import {EnglishButtonsFactory}
        from "../../buttons/concrete-factory/EnglishButtonsFactory";
import {EnglishTopNavbarButtons}
        from "./EnglishTopNavbarButtons";
import {RussianButtonsFactory}
        from "../../buttons/concrete-factory/RussianButtonsFactory";
import {RussianTopNavbarButtons}
        from "./RussianTopNavbarButtons";
import {SlovakButtonsFactory}
        from "../../buttons/concrete-factory/SlovakButtonsFactory";
import {SlovakTopNavbarButtons}
        from "./SlovakTopNavbarButtons";

//CLASS -----------------------------------------------------------------------

/**
 * TopNavbarButtonsFactory class.
 */
class TopNavbarButtonsFactory{

    //CONSTRUCTOR -------------------------------------------------------------

    /**
     * Creates a group of top navigation menu buttons.
     * @param {number | Number} languageId Language numeric identifier.
     * @return{EnglishTopNavbarButtons | RussianTopNavbarButtons | SlovakTopNavbarButtons}
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

        let buttonsFactory   = null,
            topNavbarButtons = null;

        // Create topNavbarButtons object.
        switch (languageId){

            case LanguagesEnum.ENGLISH.ID:
                buttonsFactory   = new EnglishButtonsFactory();
                topNavbarButtons = new EnglishTopNavbarButtons(buttonsFactory);
                break;

            case LanguagesEnum.RUSSIAN.ID:
                buttonsFactory   = new RussianButtonsFactory();
                topNavbarButtons = new RussianTopNavbarButtons(buttonsFactory);
                break;

            case LanguagesEnum.SLOVAK.ID:
                buttonsFactory   = new SlovakButtonsFactory();
                topNavbarButtons = new SlovakTopNavbarButtons(buttonsFactory);
                break;

            default:
                throw new Error("Top navigation buttons can't be created. " +
                    "Specified language 'id' doesn't exists.");
        }

        return topNavbarButtons;
    }
}

// EXPORT ---------------------------------------------------------------------

export {TopNavbarButtonsFactory};
