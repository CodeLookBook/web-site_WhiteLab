//MODULES IMPORT --------------------------------------------------------------

import {EnglishHomePageButtons} from "./EnglishHomePageButtons";

//CLASS -----------------------------------------------------------------------

/**
 * EnglishHomePageButtonsSingleton class.
 * Instance of this class creates EnglishHomePageButtons object.
 */
class EnglishHomePageButtonsSingleton {

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
 * Contains EnglishHomePageButtons instance.
 * @type {EnglishHomePageButtons | null}
 * @private
 */
let _instance = null;

//CLASS PRIVATE METHODS -------------------------------------------------------

/**
 * @return {EnglishHomePageButtons}
 */
function init() {
    return new EnglishHomePageButtons();
}

// EXPORT ---------------------------------------------------------------------

export  {EnglishHomePageButtonsSingleton};