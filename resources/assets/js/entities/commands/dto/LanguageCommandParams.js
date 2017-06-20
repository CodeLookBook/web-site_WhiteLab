//*****************************************************************************
// LANGUAGE COMMAND PARAMS CLASS DECLARATION
// -------------------------- MODULE PATTERN
//*****************************************************************************

import {CommandParams} from "./CommandParams";
import {TypeValidator} from "../../mixins/TypeValidator";

//-----------------------------------------------------------------------------
// UTILITIES
//-----------------------------------------------------------------------------

const set = window.WeakMap.prototype.set;
const get = window.WeakMap.prototype.get;

//-----------------------------------------------------------------------------
//LanguageCommandParams class private properties
//-----------------------------------------------------------------------------

let _id = new WeakMap();


//-----------------------------------------------------------------------------
// LANGUAGE COMMAND PARAMS CLASS DECLARATION
//-----------------------------------------------------------------------------
//
// Stores setting of new LanguageCommand object instance.
//

class LanguageCommandParams extends CommandParams{

    // CONSTRUCTOR ------------------------------------------------------------

    /**
     * @param {Number, Null} id
     */
    constructor(id){
        super();

        //Exit constructor if number of arguments equal to 0.
        if(arguments.length === 0){

            //Set default value to _id var.
            set.call(_id, this, null);
            return;
        }

        //Validates id argument.
        (function () {

            if (id === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isInteger(id)) {
                throw new TypeError();
            }
        }());

        set.call(_id, this, id);
    }

    // GETTERS AND SETTERS ----------------------------------------------------

    /**
     * @param {Number, Null}id
     */
    set id(id){

        // Validates num argument.
        (function (id) {

            if (id === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isInteger(id)) {
                throw new TypeError();
            }
        }(id));

        set.call(_id, this, id);
    }

    /**
     * @return {Number, Null}
     */
    get id(){
        return get.call(_id, this);
    }

}

export {LanguageCommandParams};