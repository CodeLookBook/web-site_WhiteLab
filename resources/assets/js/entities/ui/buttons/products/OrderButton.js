import {Button} from "../abstruct-button/Button";

/**
 * OrderButton class. Stores info about button that redirect user to "Order"
 * page.
 *
 * @extends Button
 * @inheritDoc
 */
class OrderButton extends Button{

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

export {OrderButton};
