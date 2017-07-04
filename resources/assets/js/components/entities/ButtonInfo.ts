import { Language } from './Language';

// ----------------------------------------------------------------------------
// ButtonInfo class
// ----------------------------------------------------------------------------

/**
 * Contains information about button.
 * @property language - Language class instance.
 * @property name     - Language name.
 * @property id       - Language identifier.
 */
class ButtonInfo {

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     *  'Language' class instance.
     */
    private _language: Language;

    /**
     * Button name.
     */
    private _name: string;

    /**
     * Button numeric identifier.
     */
    private _id: number;

    /**
     * @param language - Language class instance.
     * @param name     - Language name.
     * @param id       -Language identifier.
     */
    constructor(language: Language, name: string, id: number) {
        this._language = language;
        this._name = name;
        this._id = id;
    }

    // ------------------------------------------------------------------------
    // Public getters and setters.
    // ------------------------------------------------------------------------

    /**
     * Store information about button language.
     * @param language - Language class instance.
     */
    set language(language: Language) {
        this._language = language;
    }

    /**
     * Retrieve information about button language.
     */
    get language(): Language {
        return this._language;
    }

    /**
     * Stores button name.
     * @param name Button name.
     */
    set name(name: string) {
        this._name = name;
    }

    /**
     * @return Button name
     */
    get name(): string {
        return this._name;
    }

    /**
     * Stores button id.
     * @param id Button id.
     */
    set id(id: number) {
        this._id = id;
    }

    /**
     * @return Button id.
     */
    get id() {
        return this._id;
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export { ButtonInfo };