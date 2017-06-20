// IMPORT MODULES ------------------------------------------------------------------

import {ButtonSettings} from "../dto/ButtonSettings";
import {Language} from "../../../languages/abstruct-product/Language";
import {TypeValidator} from "../../../mixins/TypeValidator";
import {EmptyStringError} from "../../../errors/EmptyStringError";

// UTILITIES ------------------------------------------------------------------

/**
 * Gets value from WeakMap by key.
 * @function
 * @const
 * @private
 */
const set = WeakMap.prototype.set;

/**
 * Gets value from WeakMap by key.
 * @function
 * @const
 * @private
 */
const get = WeakMap.prototype.get;

// CLASS PRIVATE PROPERTIES --------------------------------------------------

/**
 * Language object.
 * @type {WeakMap}
 * @private
 */
const _language = new WeakMap();

/**
 * Button name.
 * @type {WeakMap}
 * @private
 */
const _name     = new WeakMap();

/**
 * Button numeric identifier.
 * @type {WeakMap}
 * @private
 */
const _id       = new WeakMap();

// CLASS ----------------------------------------------------------------------

/**
 * Button class. Stores button description information.
 *
 * @requires ReferenceError
 * @requires TypeError
 */
class Button {

    // CONSTRUCTOR ------------------------------------------------------------

    /**
     * @param {ButtonSettings} [buttonSettings] ButtonSettings class instance.
     *
     * @throws {ReferenceError} If 'buttonSettings' argument is equal to null.
     * @throws {TypeError     } If 'buttonSettings' argument doesn't equal to
     *                          ButtonSetting type.
     *
     * @requires {ReferenceError} Standard js error class.
     * @requires {TypeError     } Standard js error class.
     * @requires {WeakMap       } ES6 plugin/Standard js error class.
     * @requires {ButtonSettings} Constructor parameter type.
     */
    constructor(buttonSettings){

        //If constructor get 0 argument, than exit constructor.
        if (arguments.length === 0) {
            set.call(_language  , this, null);
            return;
        }

        //buttonSettings arguments validation
        (function (buttonSettings) {

            if(buttonSettings === null){
                throw new ReferenceError();
            }

            if(!(buttonSettings instanceof ButtonSettings)){
                throw new TypeError()
            }
        }(buttonSettings));

        //Private variables initialization
        (function (buttonSettings) {

            set.call(_language  , this, buttonSettings.language);
            set.call(_name      , this, buttonSettings.name    );
            set.call(_id        , this, buttonSettings.id      );
        }(buttonSettings));

    }


    // GETTERS & SETTERS ------------------------------------------------------


    /**
     * @param {Language} language
     * @public
     *
     * @throws {ReferenceError} 'language' argument must not be equal to null.
     * @throws {TypeError     } 'language' argument must have 'Language' type.
     */
    set language (language){

        // Language argument validation
        (function (language) {

            if (language === null) {
                throw new ReferenceError();
            }

            if (!(language instanceof Language)) {
                throw new TypeError();
            }
        }(language));

        //Save language value to WeakMap.
        set.call(_language, this, language)
    }

    /**
     * @return {Language} Returns Language instance.
     * @public
     */
    get language (){
        return get.call(_language, this);
    }

    /**
     * @param {string | String} name Button name.
     * @public
     *
     * @throws {ReferenceError  } 'name' argument must not be equal to null.
     * @throws {TypeError       } 'name' argument must have 'string' type.
     * @throws {EmptyStringError} 'name' argument must not be empty string.
     */
    set name (name) {

        // Name argument validation
        (function (name) {

            if (name === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isString(name)) {
                throw new TypeError();
            }

            if (!TypeValidator.isStringEmpty(name)){
                throw new EmptyStringError();
            }
        }(name));

        //Save name value to WeakMap.
        set.call(_name, this, name);
    }

    /**
     * @return {string | String} Button name.
     * @public
     */
    get name () {
        return get.call(_name, this);
    }

    /**
     * @param {number | Number} id Button numeric identifier.
     * @public
     *
     * @throws {ReferenceError  } 'id' argument must not be equal to null.
     * @throws {TypeError       } 'id' argument must have 'integer' type.
     */
    set id(id){

        // Id argument validation
        (function (id) {

            if (id === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isInteger(id)) {
                throw new TypeError();
            }
        }(id));

        //Save id value to WeakMap.
        set.call(_id, this, id);
    }

    /**
     * @return {number | Number} Button numeric identifier.
     * @public
     */
    get id(){
        return get.call(_id, this);
    }
}

// EXPORT ---------------------------------------------------------------------

export {Button};