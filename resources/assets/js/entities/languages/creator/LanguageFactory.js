//*************************************************************************
// LANGUAGE FACTORY PATTERN REALIZATION
//-------------- FACTORY METHOD PATTERN
//*************************************************************************

import {EnglishLanguageSingleton} from "../products/EnglishLanguageSingleton" ;
import {RussianLanguageSingleton} from "../products/RussianLanguageSingleton" ;
import {SlovakLanguageSingleton } from "../products/SlovakLanguageSinleton"   ;
import {LanguageOptions         } from "../dto/LanguageOptions"          ;
import {LanguagesEnum           } from "../enum/LanguagesEnum"     ;
import {TypeValidator           } from "../../mixins/TypeValidator"    ;


/**
 * Language factory object constructor
 * @constructor
 */
function LanguageFactory(){}


//Add "Create" method to LanguageFactory

Object.defineProperty(
    LanguageFactory.prototype,
    'Create',
    {
        configurable:   false,
        enumerable:     false,
        writable:       false,
        /**
         * Creates language instance of selected type.
         * @param {LanguageOptions} languageOptions
         */
        value:          (languageOptions)=>{

            if(!(languageOptions instanceof LanguageOptions)){
                throw new TypeError('"Create" function argument - ' +
                    '"languageOptions" has wrong type.')
            }

            if(!TypeValidator.isInteger(languageOptions.id)){
                throw new TypeError("Function argument - 'languageOptions' " +
                    "object has wrong type of 'id' property.");
            }

            let language= null;

            switch(languageOptions.id){
                case LanguagesEnum.ENGLISH.ID:
                    language = EnglishLanguageSingleton.GetInstance();
                    break;
                case LanguagesEnum.RUSSIAN.ID:
                    language = RussianLanguageSingleton.GetInstance();
                    break;
                case LanguagesEnum.SLOVAK.ID:
                    language = SlovakLanguageSingleton.GetInstance() ;
                    break;
                default:
                    throw new Error("Impossible to create new 'Language' " +
                        "instance. Selected Language 'id' doesn't exists.");
            }

            return language;
        }
    }
);

export {LanguageFactory, LanguageOptions, LanguagesEnum};


