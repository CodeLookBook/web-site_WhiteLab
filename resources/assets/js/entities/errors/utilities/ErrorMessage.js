// IMPORT LIBRARIES AND MODULES -----------------------------------------------

import {TypeValidator} from "../../mixins/TypeValidator";

/**
 * @param  {string | String} methodName
 * @param  {string | String} varName
 * @param  {string | String} varValue
 * @return {string | String}
 */
function getErrorMessage(methodName, varName, varValue){

    //Arguments validation
    (function (methodName, varName, varValue) {

        if (methodName === null || varName === null ||
            varValue === null) {

            throw new ReferenceError();
        }

        if (!TypeValidator.isString(methodName) ||
            !TypeValidator.isString(varName)) {

            throw new TypeError();
        }
    }(methodName, varName, varValue));

    //Creates error message
    return ('"' + methodName + '()" => "' + varName + '" = ' + varValue +
            '- variable has wrong type.');
}

export {getErrorMessage};
