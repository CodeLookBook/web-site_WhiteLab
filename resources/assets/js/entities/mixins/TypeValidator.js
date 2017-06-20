import {Language} from
    "../languages/abstruct-product/Language";
import {EnglishLanguage} from
    "../languages/products/EnglishLanguage";
import {EnglishLanguageSingleton} from
    "../languages/products/EnglishLanguageSingleton";

/**
 * Class that contains a set of static methods for defining type of the
 * variables.
 * @class
 */
class TypeValidator {

    /**
     * Checks, is variable type is equal to 'Language'.
     * @param {Language} oLanguage
     * @return {boolean}
     */
    static isLanguage(oLanguage){
        return oLanguage instanceof Language;
    }

    /**
     * Checks, is variable type is equal to 'EnglishLanguage'.
     * @param  {EnglishLanguage} oLanguage
     * @return {boolean}
     */
    static isEnglishLanguage(oLanguage){
        return oLanguage instanceof EnglishLanguage;
    }

    /**
     * Checks, is variable type is equal to 'EnglishLanguageSingleton'.
     * @param {EnglishLanguageSingleton} oSingleton
     * @return {boolean}
     */
    static isEnglishLanguageSingleton(oSingleton){
        return oSingleton instanceof EnglishLanguageSingleton;
    }

    /**
     * Checks, is variable type is equal to 'integer'.
     * @param {number} iNum
     * @return {boolean}
     */
    static isInteger(iNum) {

        let isNumber = false;

        if (Number.hasOwnProperty('isInteger')) {
            isNumber = Number.isInteger(iNum)
        } else {
            isNumber = ((value)=>{
                return typeof value === 'number'
                    && Number.isFinite(value)
                    && !(value % 1);
            })(iNum);
        }

        return isNumber;
    }

    /**
     * Checks, is variable type is equal to 'string' or 'String'.
     * @param  {string } sString
     * @return {boolean}
     */
    static isString(sString){
        return (sString instanceof String || typeof sString === 'string');
    }

    /**
     * Checks, is variable type is equal to ''.
     * Return true - if string is empty.
     * @param {string} sString
     * @return {boolean}
     */
    static isStringEmpty(sString){

        //Argument validation
        let isArgumentValid = (function () {

            if (sString === null) {
                throw new ReferenceError();
            }

            if (!this.isString(sString)) {
                throw new TypeError();
            }

            return true;
        }());

        //Checks, is string empty or not
        let isStringEmpty = (function (sString) {

            let trimmedString = sString.trim(),
                stringLength  = trimmedString.length;

            return (stringLength === 0);
        }(sString));


        return isStringEmpty;
    }
}

export {TypeValidator}
