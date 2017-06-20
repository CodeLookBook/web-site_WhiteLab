import {Command} from "./Command";
import {LanguagesEnum} from "../../languages/enum/LanguagesEnum";
import {LanguageManager} from "../receiver/LanguageManager";
import {LanguageCommandParams} from "../dto/LanguageCommandParams";

class SetEnglishLanguageCommand extends Command{

// CONSTRUCTOR ------------------------------------------------------------

    /**
     * @param {LanguageManager} manager
     * @param {LanguageCommandParams} params
     *
     * @throws {ReferenceError} 'manager' argument must not be equal to null.
     * @throws {ReferenceError} 'params' argument must not be equal to null.
     * @throws {ReferenceError} 'manager' argument must have LanguageManager
     *                          type.
     * @throws {ReferenceError} 'params' argument must have LanguageCommandParams
     *                          type.
     */
    constructor(manager, params){

        super();

        //Constructor arguments validation.
        {

            if(manager === null) {
                throw new ReferenceError();
            }

            if (!(manager instanceof LanguageManager)) {
                throw new TypeError();
            }

            if(params === null) {
                throw new ReferenceError();
            }

            if (!(params instanceof LanguageCommandParams)) {
                throw new TypeError();
            }
        }

        //Saves arguments to class private properties.
        {
            set.call(_manager, this, manager);
            set.call(_params , this, params );
        }
    }

    //CLASS PUBLIC PROTOTYPE METHODS ------------------------------------------

    /**
     * Executes command.
     * @public
     */
    execute(){

        let manager = get.call(_manager, this);
        let params  = get.call(_params , this);

        manager.run(LanguagesEnum.ENGLISH.ID, params);
    }

    /**
     * Unexecutes command.
     * @public
     */
    unExecute() {

        let manager = get.call(_manager, this);
        let params  = get.call(_params , this);

        manager.run(LanguagesEnum.ENGLISH.ID, params);
    }
}

// UTILITIES ------------------------------------------------------------------

const set = WeakMap.prototype.set;
const get = WeakMap.prototype.get;

//COMMAND CLASS PRIVATE PROPERTIES --------------------------------------------

/**
 * Stores 'LanguageManager' instance.
 *
 * @memberOf SetEnglishLanguageCommand
 * @name SetEnglishLanguageCommand#_manager
 * @type {WeakMap}
 * @private
 */
let _manager = new WeakMap();

/**
 * Stores new language instance params.
 *
 * @memberOf SetEnglishLanguageCommand
 * @name SetEnglishLanguageCommand#_params
 * @type {WeakMap}
 * @private
 */
let _params  = new WeakMap();

// EXPORT ---------------------------------------------------------------------

export {SetEnglishLanguageCommand};
