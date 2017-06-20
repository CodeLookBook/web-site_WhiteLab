// MODULES IMPORT -------------------------------------------------------------

import {AbstractManager      }
        from "./AbstractManager";
import {LanguagesEnum        }
        from "../../languages/enum/LanguagesEnum"
import {LanguageFactory      }
        from "../../languages/creator/LanguageFactory";
import {LanguageOptions      }
        from "../../languages/dto/LanguageOptions";
import {LanguageCommandParams}
        from "../dto/LanguageCommandParams";
import {TypeValidator        }
        from "../../mixins/TypeValidator";

// LANGUAGE MANAGER CLASS -----------------------------------------------------

/**
 *  LanguageManager class.
 */
class LanguageManager extends AbstractManager{

    // CONSTRUCTOR ------------------------------------------------------------

    constructor() {
        super();

        /**
         * Stores Language class instance.
         * @type {Language}
         * @public
         * @default null
         */
        this.appLanguage = null;

        //Create 'LanguageFactory' & save to '_languageFactory' class
        // private variable.
        set.call(_languageFactory, this, new LanguageFactory());
    }

    //PUBLIC METHODS ----------------------------------------------------------

    /**
     * Creates & saves Language instance to public  this.appLanguage property.
     * NOTE: Redefine abstract method 'Run' from 'Manager' class.
     *
     * @param {number | Number      } languageId Language id number.
     * @param {LanguageCommandParams} params     Command parameters.
     * @public
     *
     * @throws {TypeError     } 'languageId' argument must to have an integer type.
     * @throws {ReferenceError} 'params' argument must not be equal to null.
     * @throws {TypeError     } 'params' argument must to have an
     *                          'LanguageCommandParams' type.
     */
    run(languageId, params){

        //Validate 'languageId' argument
        {

            if(!TypeValidator.isInteger(languageId)){
                throw new TypeError();
            }
        }

        //Validate 'params' argument
        {

            if(params === null){
                throw new ReferenceError();
            }

            if (!(params instanceof LanguageCommandParams)) {
                throw new TypeError();
            }
        }

        //Create app Language instance using "LanguageFactory".
        {

            let languageOptions = new LanguageOptions(languageId),
                languageFactory = get.call(_languageFactory, this);

            //Create & save Language instance.
            this.appLanguage = languageFactory.Create(languageOptions);
        }
    }
}

// UTILITIES ------------------------------------------------------------------

const set = WeakMap.prototype.set;
const get = WeakMap.prototype.get;

//COMMAND CLASS PRIVATE PROPERTIES --------------------------------------------

let _languageFactory = new WeakMap();

// EXPORT  --------------------------------------------------------------------

export {LanguageManager, LanguageFactory, LanguageOptions, LanguagesEnum};
