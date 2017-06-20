// 'EmptyStringError' CLASS CONSTRUCTOR --------------------------------------------------

/**
 * EmptyStringError class. Services errors referenced to an empty string.
 * @constructor
 *
 * @param {string | String } [message]    - Error message text.
 * @param {string | String } [fileName]   - The Name of the file with an error.
 * @param {string | String } [lineNumber] - The number of line with an error.
 * @extends  Error
 * @requires Error
 */
function EmptyStringError(message, fileName, lineNumber) {

    /**
     * ErrorMessage instance.
     * @memberOf EmptyStringError
     * @name EmptyStringError#superInstance
     * @type {Error}
     * @private
     */
    let superInstance = Error.apply(null, arguments);
    copyOwnPropertiesFrom(this, superInstance);
}

// 'ErrorMessage' CLASS EXTENSION----------------------------------------------

/**
 * @type {Error}
 */
EmptyStringError.prototype = Object.create(Error.prototype);

/**
 * @type {EmptyStringError}
 */
EmptyStringError.prototype.constructor = EmptyStringError;

// CLASS PRIVATE FUNCTIONS ----------------------------------------------------

/**
 * Copy  object properties from source to target object.
 * @param  {Object} target - Object that should be copied.
 * @param  {Object} source - The source object.
 * @return {Object}
 */
function copyOwnPropertiesFrom(target, source) {

    Object.getOwnPropertyNames(source).forEach((propKey)=>{

            let desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
        }
    );

    return target;
}

// EXPORT ---------------------------------------------------------------------

export {EmptyStringError}
