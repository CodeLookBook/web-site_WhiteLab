//*****************************************************************************
// SLOVAK LANGUAGE SINGLETON CONSTRUCTOR REALIZATION
// ------------------------------- SINGLETON PATTERN
//*****************************************************************************


import {SlovakLanguage} from "./SlovakLanguage"
import {LanguagesEnum} from "../enum/LanguagesEnum"


/**
 * Slovak language singleton constructor
 * @constructor
 */
function SlovakLanguageSingleton() {}

/**
 * Instance stores reference to singleton
 * @type {SlovakLanguage, null}
 */
let instance = null;

/**
 * Creates SlovakLanguage instance
 * @param  {string, null  } abbreviation
 * @param  {string,null   } name
 * @param  {number,null   } id
 * @return {SlovakLanguage}
 * @constructor
 */
function Init(abbreviation=null, name=null, id=null) {

    return new SlovakLanguage(abbreviation, name, id);

}

/**
 * Creates and return Slovak language instance
 * @return {SlovakLanguage|null}
 * @constructor
 */
function GetInstance() {

    if(!instance){
        instance = Init(
            LanguagesEnum.SLOVAK.ABBREVIATION,
            LanguagesEnum.SLOVAK.NAME,
            LanguagesEnum.SLOVAK.ID,
        );
    }

    return instance

}

Object.defineProperty(SlovakLanguageSingleton,  'GetInstance', {
    value: GetInstance,
    writable: false,
    configurable: false,
});

export {SlovakLanguageSingleton};


