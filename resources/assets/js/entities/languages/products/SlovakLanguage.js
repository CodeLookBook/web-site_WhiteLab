//*************************************************************************
// SLOVAK LANGUAGE CONSTRUCTOR REALIZATION
// ------------------- INHERITANCE PATTERN
//*************************************************************************

import {Language} from "../abstruct-product/Language"

/**
 * SlovakLanguage instance constructor
 *
 * @param {String, null}abbreviation
 * @param {String, null}name
 * @param {Number, null}id
 * @constructor
 */
function SlovakLanguage(abbreviation=null, name=null, id=null) {
    Language.apply(this, arguments);
}

//Inheritance from Language class
SlovakLanguage.prototype = Object.create(Language.prototype);

//Constructor initialization
SlovakLanguage.prototype.constructor = SlovakLanguage;

export {SlovakLanguage};
