import {Button} from "../abstruct-button/Button";

/**
 * EnglishFbShareButton class. Stores info about button that opens Facebook "Share"
 * dialog, that helps user to make repost on FaceBook.
 *
 * @extends Button
 * @inheritDoc
 */
class EnglishFbShareButton extends Button{

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

export {EnglishFbShareButton};
