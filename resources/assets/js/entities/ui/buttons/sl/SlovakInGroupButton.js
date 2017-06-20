import {Button} from "../abstruct-button/Button";

/**
 * SlovakInGroupButton class. Stores info about button that opens Instagram social
 * network group.
 *
 * @extends Button
 * @inheritDoc
 */
class SlovakInGroupButton extends Button {

    /**
     * @param  {ButtonSettings} [buttonSettings]
     *
     * @throws {ReferenceError} If 'buttonSettings' argument is equal to null.
     * @throws {TypeError}      If 'buttonSettings' argument doesn't equal to
     *                          ButtonSetting type.
     */
    constructor(buttonSettings){
        super(buttonSettings);
    }
}

export {SlovakInGroupButton};
