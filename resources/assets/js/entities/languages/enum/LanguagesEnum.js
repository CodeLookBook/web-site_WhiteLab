//*****************************************************************************
// LANGUAGE ENUM CONSTRUCTOR REALIZATION
//*****************************************************************************


//Helper. Defines Object property.
/**
 *
 * @param {object}  object
 * @param {string}  key
 * @param {*} value
 * @param {boolean} writable
 * @param {boolean} enumerable
 * @param {boolean} configurable
 */
function DefineProperty(object,
                        key,
                        value,
                        writable    = false,
                        enumerable  = true,
                        configurable= false) {

    let settings = { value, writable, enumerable, configurable };
    Object.defineProperty(object, key, settings);

}

/**
 * Helper. Defines group of Object properties.
 * @param {Object} object
 * @param {[{String:Object}]}  keyValuePairsDictionary
 */
function DefinesProperties(object, keyValuePairsDictionary) {

    keyValuePairsDictionary.forEach((pair, i, pairs)=>{

        for (let key in pair) {
            let languageName = key,
                language   = {},
                properties = pair[key];

            for (let propertyName in properties) {
                DefineProperty(language, propertyName, properties[propertyName]);
            }

            DefineProperty(object, languageName, language);
        }

    });
}

//Enum constructor declaration
function LanguagesEnum(){}

let languagesProperties = [
    {ENGLISH: {ABBREVIATION : "en", NAME: "English", ID: 1}},
    {RUSSIAN: {ABBREVIATION : "ru", NAME: "Russian", ID: 2}},
    {SLOVAK : {ABBREVIATION : "sl", NAME: "Slovak" , ID: 3}},
];

//Adds properties to LanguagesEnum
DefinesProperties(LanguagesEnum, languagesProperties);


export {LanguagesEnum}