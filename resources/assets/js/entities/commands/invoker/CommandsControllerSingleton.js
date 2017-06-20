// MODULES IMPORT -------------------------------------------------------------

import {CommandsController} from "./CommandsController";

// "COMMANDS CONTROLLER SINGLETON" CLASS --------------------------------------

class CommandsControllerSingleton{

    /**
     * @static
     * @return {CommandsController}
     */
    static getInstance(){

        if(_instance === null){
            _instance = init();
        }

        return _instance;
    }
}

// CLASS PRIVATE STATIC PROPERTIES --------------------------------------------

/**
 * Stores CommandsController instance
 * @type {CommandsController}
 */
let _instance = null;

// CLASS PRIVATE STATIC FUNCTIONS ---------------------------------------------

/**
 * Creates or returns existing CommandsController instance.
 * @return {CommandsController}
 */
function init(){
    return new CommandsController();
}

// EXPORT ---------------------------------------------------------------------

export {CommandsControllerSingleton};