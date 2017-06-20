import {Button} from "../abstruct-button/Button";

/**
 * SlovakVacanciesButton class. Stores info about button that redirect user to
 * "Price" page.
 *
 * @extends Button
 * @inheritDoc
 */
class SlovakVacanciesButton extends Button {

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

export {SlovakVacanciesButton};