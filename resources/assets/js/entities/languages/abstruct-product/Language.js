// MODULES IMPORT -------------------------------------------------------------

import {TypeValidator} from "../../mixins/TypeValidator";

// CLASS PRIVATE FUNCTIONS ----------------------------------------------------

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

// CLASS PRIVATE PROPERTIES ---------------------------------------------------

/**
 * Language name shortcut.
 * @type {WeakMap}
 * @private
 */
let _abbreviation = new WeakMap();

/**
 * Language full name.
 * @type {WeakMap}
 * @private
 */
let _name         = new WeakMap();

/**
 * Language id number.
 * @type {WeakMap}
 * @private
 */
let _id           = new WeakMap();

/**
 * Pointer to Language class instance.
 * @type {null | Language}
 * @private
 */
let _that = null;

// CLASS  ---------------------------------------------------------------------

/**
 * Language class. Stores language description information.
 */
class Language {

    // CONSTRUCTOR ------------------------------------------------------------

    /**
     *
     * @param {string | String} abbreviation - Language name shortcut.
     * @param {string | String} name         - Full language name.
     * @param {number | Number} id           - Language numeric identifier.
     *
     * @throws ReferenceError - If 'abbreviation', 'name' or 'id' equal to null.
     * @throws TypeError      - If 'abbreviation' is not a 'string'.
     * @throws TypeError      - If 'name' is not a 'string'.
     * @throws TypeError      - If 'id' is not a 'integer'.
     *
     * @requires ReferenceError
     * @requires TypeError
     */
    constructor(abbreviation, name, id) {

        //Parameters validation
        {

            if (abbreviation === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isString(abbreviation)) {
                throw new TypeError();
            }

            if (name === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isString(name)) {
                throw new TypeError();
            }

            if (id === null) {
                throw new ReferenceError();
            }

            if (!TypeValidator.isInteger(id)) {
                throw new TypeError();
            }
        }

        //Private variables init
        {
            set.call(_abbreviation , this, abbreviation);
            set.call(_name         , this, name        );
            set.call(_id           , this, id          );
            _that = this;
        }
    }

}

// ADD GETTERS & SETTERS TO CLASS PROTOTYPE -----------------------------------

Object.defineProperties(
    Language.prototype,
    {
        ABBREVIATION: {
            configurable: false,
            enumerable  : false,

            /**
             * @property {string} ABBREVIATION
             * @memberOf Language
             * @name Language#ABBREVIATION
             * @public
             */
            get: () => {

                // Get language name abbreviation from _abbreviation (WeakMap).
                return get.call(_abbreviation, _that);
            },
        },
        NAME:{
            configurable: false,
            enumerable  : false,

            /**
             * @property {string} NAME
             * @memberOf Language
             * @name Language#NAME
             * @public
             */
            get: () => {

                // Get language full name from '_name'(WeakMap).
                return get.call(_name, _that);
            }
        },
        ID:{
            configurable: false,
            enumerable  : false,

            /**
             * @property {string} ID
             * @memberOf Language
             * @name Language#ID
             * @public
             */
            get: () => {

                // Get language identification number from '_id'(WeakMap).
                return get.call(_id, _that);
            }
        }
    }
);

//Exports constructor
export {Language};
