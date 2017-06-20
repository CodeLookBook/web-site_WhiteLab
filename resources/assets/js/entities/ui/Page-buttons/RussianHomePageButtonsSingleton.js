//MODULES IMPORT --------------------------------------------------------------

import {RussianHomePageButtons} from "./RussianHomePageButtons";

//CLASS -----------------------------------------------------------------------

/**
 * RussianHomePageButtonsSingleton class.
 * Instance of this class creates RussianHomePageButtons object.
 */
class RussianHomePageButtonsSingleton {

    //PUBLIC METHODS ----------------------------------------------------------

    create(){
        if(_instance === null){
            _instance = init();
        }

        return _instance;
    }
}

//CLASS PRIVATE PROPERTIES ----------------------------------------------------

/**
 * Contains RussianHomePageButtons instance.
 * @type {RussianHomePageButtons | null}
 * @private
 */
let _instance = null;

//CLASS PRIVATE METHODS -------------------------------------------------------

/**
 * @return {RussianHomePageButtons}
 */
function init() {
    return new RussianHomePageButtons();
}

// EXPORT ---------------------------------------------------------------------

export  {RussianHomePageButtonsSingleton};