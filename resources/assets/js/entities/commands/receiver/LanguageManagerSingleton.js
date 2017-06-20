//*************************************************************************
// "LANGUAGE MANAGER SINGLETON" CLASS REALIZATION
// ---------------------------- SINGLETON PATTERN
//*************************************************************************

import {LanguageManager} from "./LanguageManager";

class LanguageManagerSingleton {


    /**
     * Creates new or returns existing LanguageManager instance.
     * @static
     * @return {LanguageManager}
     */
    static getInstance() {

        if(!_instance){
            _instance = init();
        }

        return _instance;

    }

}

/**
 * "instance" stores reference to the Singleton
 * @type {LanguageManager | null}
 */
let _instance = null;

/**
 * Creates LanguageManager object.
 * @return {LanguageManager}
 */
function init(){
    return new LanguageManager();
}

export {LanguageManagerSingleton};
