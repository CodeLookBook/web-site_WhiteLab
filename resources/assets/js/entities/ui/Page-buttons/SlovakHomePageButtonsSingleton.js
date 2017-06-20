//MODULES IMPORT --------------------------------------------------------------

import {SlovakHomePageButtons} from "./SlovakHomePageButtons";

//CLASS -----------------------------------------------------------------------

/**
 * SlovakHomePageButtonsSingleton class.
 * Instance of this class creates SlovakHomePageButtons object.
 */
class SlovakHomePageButtonsSingleton {

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
 * Contains SlovakHomePageButtons instance.
 * @type {SlovakHomePageButtons | null}
 * @private
 */
let _instance = null;

//CLASS PRIVATE METHODS -------------------------------------------------------

/**
 * @return {SlovakHomePageButtons}
 */
function init() {
    return new SlovakHomePageButtons();
}

// EXPORT ---------------------------------------------------------------------

export  {SlovakHomePageButtonsSingleton};