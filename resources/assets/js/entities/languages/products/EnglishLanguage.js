//*************************************************************************
// ENGLISH LANGUAGE CONSTRUCTOR REALIZATION
// -------------------- INHERITANCE PATTERN
//*************************************************************************

import {Language} from "../abstruct-product/Language"

/**
 * English language object constructor declaration
 * @param {string, null} abbreviation
 * @param {string, null} name
 * @param {number, null} id
 * @constructor
 */
function EnglishLanguage (abbreviation = null, name = null, id = null){
    Language.apply(this, arguments)
}

//Inheritance from Language class
EnglishLanguage.prototype = Object.create(Language.prototype);

//Constructor initialization
EnglishLanguage.prototype.constructor = EnglishLanguage;

export {EnglishLanguage};