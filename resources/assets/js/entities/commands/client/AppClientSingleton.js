// IMPORT MODULES -------------------------------------------------------------

import {AppClient} from "./AppClient";

// CLASS ----------------------------------------------------------------------
/**
 * AppClientSingleton class.
 *
 */
class AppClientSingleton{

    /**
     * Creates AppClient class instance.
     * @return {AppClient}
     * @public
     */
    static getInstance(){

        if(_instance === null){
            _instance = init();
        }

        return _instance;
    }
}

// CLASS PRIVATE PROPERTIES ---------------------------------------------------

/**
 * Stores reference to the Singleton
 * @type {AppClient | null}
 */
let _instance = null;

// CLASS PRIVATE FUNCTIONS ----------------------------------------------------

/**
 * Creates App object.
 * @methodOf AppClientSingleton
 * @name AppClientSingleton#init
 * @return {AppClient}
 * @private
 */
function init() {
    return new AppClient();
}

// EXPORT ---------------------------------------------------------------------

export {AppClientSingleton};
