//*************************************************************************
// RUSSIAN LANGUAGE CONSTRUCTOR REALIZATION
// -------------------- INHERITANCE PATTERN
//*************************************************************************

import {Language} from "../abstruct-product/Language"

/**
 * @param {string, null} abbreviation
 * @param {string, null} name
 * @param {number, null} id
 * @constructor
 */
function RussianLanguage(abbreviation=null, name=null, id=null) {
    Language.apply(this, arguments);
}

//Inheritance from Language class
RussianLanguage.prototype = Object.create(Language.prototype);

//Constructor initialization
RussianLanguage.prototype.constructor = RussianLanguage;

export {RussianLanguage};