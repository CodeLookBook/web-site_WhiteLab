import {Button} from "../abstruct-button/Button";

/**
 * EnglishFbGroupButton class. Stores info about button that opens Facebook social
 * network group.
 *
 * @extends Button
 * @inheritDoc
 */
class EnglishFbGroupButton extends Button{

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

export {EnglishFbGroupButton};
