// ----------------------------------------------------------------------------
// Language class
// ----------------------------------------------------------------------------
/**
 * Contains language description information.
 */
class Language {

    // ------------------------------------------------------------------------
    // Private properties.
    // ------------------------------------------------------------------------

    private _abbreviation: string;
    private _name:         string;
    private _id:           number;

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     * @param {string} abbreviation - Language name abbr.
     * @param {string} name         - Language name.
     * @param {number} id           - Language id number.
     */
    construct(abbreviation: string, name: string, id: number) {
        this._abbreviation = abbreviation;
        this._name         = name;
        this._id           = id;
    }

    // ------------------------------------------------------------------------
    // Public getters and setters.
    // ------------------------------------------------------------------------

    /**
     * @param {string} abbr - Language name abbreviation.
     */
    set abbreviation(abbr: string) {
        this._abbreviation = abbr;
    }

    /**
     * @return {string} - Language name abbreviation.
     */
    get abbreviation(): string {
        return this._abbreviation;
    }

    /**
     * @param {string} name - Language name.
     */
    set name(name: string) {
        this._name = name;
    }

    /**
     * @return {string} - Language name.
     */
    get name(): string {
        return this._name = name;
    }

    /**
     * @param {number} id - Language name.
     */
    set id(id: number) {
        this._id = id;
    }

    /**
     * @return {string} - Language name.
     */
    get id(): number {
        return this._id;
    }

}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {Language};


