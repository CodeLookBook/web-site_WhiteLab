// MODULES IMPORT -------------------------------------------------------------

import {ButtonsAbstractFactory} from "../abstruct-factory/ButtonsAbstractFactory";
import {SlovakContactButton} from "../sl/SlovakContactButton";
import {SlovakFbGroupButton} from "../sl/SlovakFbGroupButton";
import {SlovakFbShareButton} from "../sl/SlovakFbShareButton";
import {SlovakInGroupButton} from "../sl/SlovakInGroupButton";
import {SlovakOrderButton} from "../sl/SlovakOrderButton";
import {SlovakPriceButton} from "../sl/SlovakPriceButton";
import {SlovakVacanciesButton} from "../sl/SlovakVacanciesButton";

// CLASS DECLARATION ----------------------------------------------------------

/**
 * SlovakButtonsFactory class.
 * @extends ButtonsAbstractFactory
 */
class SlovakButtonsFactory extends ButtonsAbstractFactory{

    // CONSTRUCTOR ------------------------------------------------------------

    constructor(){
        super();
    }

    //REDEFINED ABSTRACT PUBLIC METHODS ---------------------------------------

    /**
     * @return {SlovakContactButton} SlovakContactButton class instance.
     * @public
     */
    createContactButton(){
        return new SlovakContactButton();
    }

    /**
     * @return {SlovakFbGroupButton} SlovakFbGroupButton class instance.
     * @public
     */
    createFbGroupButton(){
        return new SlovakFbGroupButton();
    }

    /**
     * @return {SlovakFbShareButton} SlovakFbShareButton class instance.
     * @public
     */
    createFbShareButton(){
        return new SlovakFbShareButton();
    }

    /**
     * @return {SlovakInGroupButton} SlovakInGroupButton class instance.
     * @public
     */
    createInGroupButton(){
        return new SlovakInGroupButton();
    }

    /**
     * @return {SlovakOrderButton} SlovakOrderButton class instance.
     * @public
     */
    createOrderButton(){
        return new SlovakOrderButton();
    }

    /**
     * @return {SlovakPriceButton} SlovakPriceButton class instance.
     * @public
     */
    createPriceButton(){
        return new SlovakPriceButton();
    }

    /**
     * @return {SlovakVacanciesButton} SlovakVacanciesButton class instance.
     * @public
     */
    createVacanciesButton(){
        return new SlovakVacanciesButton();
    }
}

// EXPORT ---------------------------------------------------------------------

export {SlovakButtonsFactory};