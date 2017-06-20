//*****************************************************************************
// LANGUAGE OPTIONS CONSTRUCTOR DECLARATION
// ------------------------- MODULE PATTERN
//*****************************************************************************

import {TypeValidator} from "../../mixins/TypeValidator";

//-----------------------------------------------------------------------------
// UTILITIES
//-----------------------------------------------------------------------------

const set = window.WeakMap.prototype.set;
const get = window.WeakMap.prototype.get;

//-----------------------------------------------------------------------------
//Command class private properties
//-----------------------------------------------------------------------------


let _id = new WeakMap();
/**
 * Pointer to 'LanguageOptions' instance.
 * @type {null | LanguageOptions}
 * @private
 */
let _that = null;

/**
 * LanguageOptions class. Contains information that will be used to create
 * new Language instance.
 *
 * @param {Number, Null} id Language numeric identifier.
 * @constructor
 */
function LanguageOptions(id) {

    if (!TypeValidator.isInteger(id)) {
            throw new TypeError('Constructor argument - "iId", ' +
                'has wrong type.');
    } else {
        set.call(_id, this, id);
        _that = this;
    }

}

//Adds 'id' property to LanguageOptions class
Object.defineProperty(
    LanguageOptions.prototype,
    "id", {
        configurable: false,
        enumerable: true,
        /**
         * @param {Number, Null}num
         */
        set: (num) => {

            /**
             * 'num' argument validation;
             */
            {
                if(num !== null){
                    throw new ReferenceError('"num" argument, ' +
                        'must not be equal to 0.');
                }

                if (!TypeValidator.isInteger(num)) {
                    throw new TypeError('"num" argument, has wrong ' +
                        'type.');
                }
            }

            set.call(_id, _that, num);
        },

        /**
         * @return {Number, Null}
         */
        get: () => {
            return get.call(_id, _that);
        }
});

export {LanguageOptions};



