// IMPORT MODULES -------------------------------------------------------------

import {Language        }
        from "../../../languages/abstruct-product/Language";
import {TypeValidator   }
        from "../../../mixins/TypeValidator";
import {EmptyStringError}
        from "../../../errors/EmptyStringError";

// "ButtonSettings" CLASS -----------------------------------------------------

/**
 * ButtonSettings class. Stores a set of UI Button settings.
 *
 * @requires Language
 * @requires TypeValidator
 * @requires WeakMap
 */
class ButtonSettings {

    // CONSTRUCTOR ------------------------------------------------------------

    /**
     * @param {Language     } language - Language class object.
     * @param {string|String} name     - Button name.
     * @param {number|Number} id       - Button id.
     *
     * @throws {ReferenceError}
     * @throws {TypeError}
     * @throws {EmptyStringError}
     *
     * @constructor
     */
    constructor(language, name, id){

        // Language argument validation
        {
            if (language === null) {
                throw new ReferenceError();
            }

            if (!(language instanceof Language)) {
                throw new TypeError();
            }
        }

        // Name argument validation
        {
            if (name === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isString(name)) {
                throw new TypeError();
            }

            if (!TypeValidator.isStringEmpty(name)){
                throw new EmptyStringError();
            }
        }

        // Id argument validation
        {
            if (id === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isInteger(id)) {
                throw new TypeError();
            }
        }

        //Private properties initialization.
        {
            set.call(_language, this, language );
            set.call(_name    , this, name     );
            set.call(_id      , this, id       );
        }
    }

    // GETTERS & SETTERS ------------------------------------------------------

    /**
     * @param   {Language       } language - Language class instance.
     * @public
     * @throws  {ReferenceError } 'language' parameter must not be null.
     * @throws  {TypeError      } 'language' parameter must have Language type.
     */
    set language(language){

        //Argument validation
        (function(){

            if (language === null) {
                throw new ReferenceError();
            }

            if (!(language instanceof Language)) {
                throw new TypeError();
            }
        }());

        //Reference value to key in WeakMap
        set.call(_language, this, language);
    }

    /**
     * @return {Language}
     * @public
     */
    get language (){

        //Get value of key in WeakMap
        return get.call(_language, this);
    }

    /**
     * @param   {string | String} name - button name.
     * @public
     * @throws  {ReferenceError  } 'name' must not be null.
     * @throws  {TypeError       } 'name' must have string or String type.
     * @throws  {EmptyStringError} 'name' must not be an empty string.
     */
    set name(name){

        //Argument validation
        {
            if(name === null){
                throw new ReferenceError();
            }

            if(!TypeValidator.isString(name)) {
                throw new TypeError();
            }

            if (!TypeValidator.isStringEmpty(name)){
                throw new EmptyStringError();
            }
        }

        //Reference value to key in WeakMap
        set.call(_name, this, name);
    }

    /**
     * @return {string | String}
     * @public
     */
    get name () {

        //Get value of the key in WeakMap
        return get.call(_name, this);
    }

    /**
     * @param {number | Number} id - button id number.
     * @public
     * @throws  {ReferenceError } 'id' parameter must not be null.
     * @throws  {TypeError      } 'id' parameter must have integer type.
     */
    set id(id){

         //Argument validation
         {
             if (!id) {
                 throw new ReferenceError();
             }

             if (!TypeValidator.isInteger(id)) {
                 throw new TypeError();
             }
         }

         //Reference value to key in WeakMap
         set.call(_id, this, id);
    }

    /**
     * @return {number | Number}
     * @public
     */
    get id(){

        //Get value of the key in WeakMap
        return get.call(_id, this);
    }
}

// UTILITIES ------------------------------------------------------------------

/**
 * Saves value to WeakMap.
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

// PRIVATE PROPERTIES ---------------------------------------------------------

/**
 * Stores {@link Language} object.
 * @type {WeakMap}
 * @const
 * @private
 */

const _language = new WeakMap();

/**
 * Name of the button.
 * @type {WeakMap}
 * @const
 * @private
 */
const _name     = new WeakMap();

/**
 * Button identifier.
 * @type {WeakMap}
 * @const
 * @private
 */
const _id       = new WeakMap();

// EXPORT ---------------------------------------------------------------------

/**
 * ButtonSettings class.
 */
export {ButtonSettings};