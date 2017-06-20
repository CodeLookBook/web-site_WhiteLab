// IMPORT MODULES -------------------------------------------------------------

import {Command} from "../commands/Command";
import {CommandsControllerSingleton} from "../invoker/CommandsControllerSingleton";
import {LanguageCommandParams} from "../dto/LanguageCommandParams";
import {LanguageManagerSingleton} from "../receiver/LanguageManagerSingleton";
import {SetEnglishLanguageCommand} from "../commands/SetEnglishLanguageCommand";
import {SetRussianLanguageCommand} from "../commands/SetRussianLanguageCommand";
import {SetSlovakLanguageCommand} from "../commands/SetSlovakLanguageCommand";

// CLASS ----------------------------------------------------------------------

class AppClient {

    //CONSTRUCTOR -------------------------------------------------------------

    constructor(){

        //Private properties initialization with default values.
        {
            let languageManager    = LanguageManagerSingleton.getInstance(),
                commandsController = CommandsControllerSingleton.getInstance();

            set.call(_languageManager   , this, languageManager);
            set.call(_commandsController, this, commandsController);
        }
    }

    //PUBLIC METHODS DECLARATION ----------------------------------------------

    /**
     * @param {LanguageCommandParams} params
     * @public
     */
    setEnglishLanguage(params){

        //Arguments validation
        {
            if(params === null) {
                throw new ReferenceError();
            }

            if(!(params instanceof  LanguageCommandParams)) {
                throw new TypeError();
            }
        }

        //Create 'EnglishLanguage' object.
        {
            let languageManager = get.call(_languageManager, this);
            return this._run(new SetEnglishLanguageCommand(languageManager, params));
        }
    }

    /**
     * @param {LanguageCommandParams} params
     * @public
     */
    setRussianLanguage(params){

        //Arguments validation
        {
            if(params === null) {
                throw new ReferenceError();
            }

            if(!(params instanceof  LanguageCommandParams)) {
                throw new TypeError();
            }
        }

        // Create "RussianLanguage" object.
        {
            let languageManager = get.call(_languageManager, this);

            return this._run(new SetRussianLanguageCommand(languageManager, params));
        }
    }

    /**
     * @param {LanguageCommandParams} params
     * @public
     */
    setSlovakLanguage(params){

        //Arguments validation
        {
            if(params === null) {
                throw new ReferenceError();
            }

            if(!(params instanceof  LanguageCommandParams)) {
                throw new TypeError();
            }
        }

        // Create "SlovakLanguage" object.
        {
            let languageManager = get.call(_languageManager, this);
            return this._run(new SetSlovakLanguageCommand(languageManager, params));
        }
    }


    SetSlovakLanguageUiInterface(){

    }

    /**
     * @param {Command} command
     * @return {Language | Null}
     */
    _run(command) {

        let languageManager = get.call(_languageManager, this),
            commandsController = _commandsController.get(this),
            result = null;

        commandsController.storeCommand(command);
        commandsController.executeCommand();

        if (command instanceof Command) {
            result = languageManager.appLanguage;
        }

        return result;
    }
}

// UTILITY METHODS ------------------------------------------------------------

const set = WeakMap.prototype.set;
const get = WeakMap.prototype.get;

// APP CLASS PRIVATE PROPERTIES -----------------------------------------------

const _commandsController = new WeakMap();
const _languageManager    = new WeakMap();

// EXPORT ---------------------------------------------------------------------

export {AppClient};