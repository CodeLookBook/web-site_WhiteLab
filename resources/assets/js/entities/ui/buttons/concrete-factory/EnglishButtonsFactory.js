// MODULES IMPORT -------------------------------------------------------------

import {ButtonsAbstractFactory  } from "../abstruct-factory/ButtonsAbstractFactory";
import {EnglishContactButton    } from "../en/EnglishContactButton";
import {EnglishFbGroupButton    } from "../en/EnglishFbGroupButton";
import {EnglishFbShareButton    } from "../en/EnglishFbShareButton";
import {EnglishInGroupButton    } from "../en/EnglishInGroupButton";
import {EnglishOrderButton      } from "../en/EnglishOrderButton";
import {EnglishPriceButton      } from "../en/EnglishPriceButton";
import {EnglishVacanciesButton  } from "../en/EnglishVacanciesButton";

// CLASS DECLARATION ----------------------------------------------------------

/**
 * EnglishButtonsFactory class.
 *
 * @extends ButtonsAbstractFactory
 * @inheritDoc ButtonsAbstractFactory
 */
class EnglishButtonsFactory extends ButtonsAbstractFactory{

    // CONSTRUCTOR ------------------------------------------------------------

    constructor(){
        super();
    }

    //REDEFINED ABSTRACT PUBLIC METHODS ---------------------------------------

    /**
     * @return {EnglishContactButton} EnglishContactButton class instance.
     * @public
     */
    createContactButton(){
        return new EnglishContactButton();
    }

    /**
     * @return {EnglishFbGroupButton} EnglishFbGroupButton class instance.
     * @public
     */
    createFbGroupButton(){
        return new EnglishFbGroupButton();
    }

    /**
     * @return {EnglishFbShareButton} EnglishFbShareButton class instance.
     * @public
     */
    createFbShareButton(){
        return new EnglishFbShareButton();
    }

    /**
     * @return {EnglishInGroupButton} EnglishInGroupButton class instance.
     * @public
     */
    createInGroupButton(){
        return new EnglishInGroupButton();
    }

    /**
     * @return {EnglishOrderButton} EnglishOrderButton class instance.
     * @public
     */
    createOrderButton(){
        return new EnglishOrderButton();
    }

    /**
     * @return {EnglishPriceButton} EnglishPriceButton class instance.
     * @public
     */
    createPriceButton(){
        return new EnglishPriceButton();
    }

    /**
     * @return {EnglishVacanciesButton} EnglishVacanciesButton class instance.
     * @public
     */
    createVacanciesButton(){
        return new EnglishVacanciesButton();
    }
}

// EXPORT ---------------------------------------------------------------------

export {EnglishButtonsFactory};
