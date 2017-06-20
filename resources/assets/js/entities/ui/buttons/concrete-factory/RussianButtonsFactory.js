// MODULES IMPORT -------------------------------------------------------------

import {ButtonsAbstractFactory} from "../abstruct-factory/ButtonsAbstractFactory";
import {RussianContactButton} from "../ru/RussianContactButton";
import {RussianFbGroupButton} from "../ru/RussianFbGroupButton";
import {RussianFbShareButton} from "../ru/RussianFbShareButton";
import {RussianInGroupButton} from "../ru/RussianInGroupButton";
import {RussianOrderButton} from "../ru/RussianOrderButton";
import {RussianPriceButton} from "../ru/RussianPriceButton";
import {RussianVacanciesButton} from "../ru/RussianVacanciesButton";

// CLASS DECLARATION ----------------------------------------------------------

/**
 * RussianButtonsFactory class.
 * @extends ButtonsAbstractFactory
 */
class RussianButtonsFactory extends ButtonsAbstractFactory{

    // CONSTRUCTOR ------------------------------------------------------------

    constructor(){
        super();
    }

    //REDEFINED ABSTRACT PUBLIC METHODS ---------------------------------------

    /**
     * @return {RussianContactButton} RussianContactButton class instance.
     * @public
     */
    createContactButton(){
        return new RussianContactButton();
    }

    /**
     * @return {RussianFbGroupButton} RussianFbGroupButton class instance.
     * @public
     */
    createFbGroupButton(){
        return new RussianFbGroupButton();
    }

    /**
     * @return {RussianFbShareButton} RussianFbShareButton class instance.
     * @public
     */
    createFbShareButton(){
        return new RussianFbShareButton();
    }

    /**
     * @return {RussianInGroupButton} RussianInGroupButton class instance.
     * @public
     */
    createInGroupButton(){
        return new RussianInGroupButton();
    }

    /**
     * @return {RussianOrderButton} RussianOrderButton class instance.
     * @public
     */
    createOrderButton(){
        return new RussianOrderButton();
    }

    /**
     * @return {RussianPriceButton} RussianPriceButton class instance.
     * @public
     */
    createPriceButton(){
        return new RussianPriceButton();
    }

    /**
     * @return {RussianVacanciesButton} RussianVacanciesButton class instance.
     * @public
     */
    createVacanciesButton(){
        return new RussianVacanciesButton();
    }
}

// EXPORT ---------------------------------------------------------------------

export {RussianButtonsFactory};
