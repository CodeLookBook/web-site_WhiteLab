//*************************************************************************
// ENGLISH LANGUAGE SINGLETON CONSTRUCTOR REALIZATION
// -------------------------------- SINGLETON PATTERN
//*************************************************************************

import {EnglishLanguage} from "./EnglishLanguage"
import {LanguagesEnum} from "../enum/LanguagesEnum"


//EnglishLanguageSingleton constructor
function EnglishLanguageSingleton() {}


/**
 * Instance stores reference to the Singleton
 * @type {EnglishLanguage, null}
 */
let instance = null;


/**
 * @param {string | String} abbreviation
 * @param {string | String} name
 * @param {number | Number} id
 * @return {EnglishLanguage}
 * @constructor
 */
function Init(abbreviation, name , id) {

    return new EnglishLanguage(abbreviation, name, id)
}

/**
 * @return {EnglishLanguage}
 * @constructor
 */
function GetInstance (){

    if(!instance){
        instance = Init(
            LanguagesEnum.ENGLISH.ABBREVIATION,
            LanguagesEnum.ENGLISH.NAME,
            LanguagesEnum.ENGLISH.ID,
        );
    }

    return instance;
}

//Adds new property that retrieves EnglishLanguage object
Object.defineProperty(EnglishLanguageSingleton, 'GetInstance', {
    writable    : false,
    configurable: false,
    value       : GetInstance,
});


export {EnglishLanguageSingleton};