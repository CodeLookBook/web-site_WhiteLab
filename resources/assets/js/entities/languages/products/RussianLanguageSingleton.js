//*****************************************************************************
// RUSSIAN LANGUAGE SINGLETON CONSTRUCTOR REALIZATION
// -------------------------------- SINGLETON PATTERN
//*****************************************************************************


import {RussianLanguage} from "./RussianLanguage"
import {LanguagesEnum} from "../enum/LanguagesEnum"


/**
 * Russian language singleton constructor
 * @constructor
 */
function RussianLanguageSingleton() {}

/**
 * Instance stores reference to the Singleton
 * @type {RussianLanguage, null}
 */
let instance = null;

/**
 * @param {string, null} abbreviation
 * @param {string, null} name
 * @param {number, null} id
 * @return {RussianLanguage} Russian language instance
 * @constructor
 */
function Init(abbreviation=null, name=null, id=null) {

    return new RussianLanguage(abbreviation, name, id)

}

/**
 * @return {RussianLanguage} Russian language instance
 */
function GetInstance() {

    if(!instance){
        instance = Init(
            LanguagesEnum.RUSSIAN.ABBREVIATION,
            LanguagesEnum.RUSSIAN.NAME,
            LanguagesEnum.RUSSIAN.ID
        );
    }

    return instance;

}

//Adds new property that retrieves RussianLanguage object
Object.defineProperty(RussianLanguageSingleton, 'GetInstance', {
    value: GetInstance,
    writable: false,
    configurable: false
});

export {RussianLanguageSingleton};


