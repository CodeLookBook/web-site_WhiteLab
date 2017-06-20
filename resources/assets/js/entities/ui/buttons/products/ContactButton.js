import {Button} from "../abstruct-button/Button";

/**
 * ContactButton class. Stores info about button that opens app
 * page "Contacts".
 *
 * @extends Button
 * @inheritDoc
 */
class ContactButton extends Button{

    /**
     * @param  {ButtonSettings} buttonSettings
     *
     * @throws {ReferenceError} If 'buttonSettings' argument is equal to null.
     * @throws {TypeError}      If 'buttonSettings' argument doesn't equal to
     *                          ButtonSetting type.
     */
    constructor(buttonSettings){
        super(buttonSettings);
    }
}

export {ContactButton};
