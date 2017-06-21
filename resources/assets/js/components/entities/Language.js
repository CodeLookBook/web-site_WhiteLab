// ----------------------------------------------------------------------------
// Language class
// ----------------------------------------------------------------------------

/**
 * Contains language description information.
 * @property {string} abbreviation  - Language name abbr.
 * @property {string} name          - Language name.
 * @property {number} id            - Language id number.
 */
class Language {

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     * @param {string} abbreviation - Language name abbr.
     * @param {string} name         - Language name.
     * @param {number} id           - Language id number.
     */
    construct(abbreviation: string, name: string, id: number) {

        // Init private variables.
        _set.call(_abbreviation, this, abbreviation);
        _set.call(_name, this, name);
        _set.call(_id, this, id);
    }

    // ------------------------------------------------------------------------
    // Public getters and setters.
    // ------------------------------------------------------------------------

    /**
     * @param {string} abbr - Language name abbreviation.
     */
    set abbreviation(abbr: string) {
        _set.call(_abbreviation, this, abbr);
    }

    /**
     * @return {string} - Language name abbreviation.
     */
    get abbreviation(): string {
        return _get.call(_abbreviation, this);
    }

    /**
     * @param {string} name - Language name.
     */
    set name(name: string) {
        _set.call(_name, this, name);
    }

    /**
     * @return {string} - Language name.
     */
    get name(): string {
        return _get.call(_name, this);
    }

    /**
     * @param {number} id - Language name.
     */
    set id(id: number) {
        _set.call(_name, this, id);
    }

    /**
     * @return {string} - Language name.
     */
    get id(): number {
        return _get.call(_name, this);
    }
}

// ----------------------------------------------------------------------------
// Private functions
// ----------------------------------------------------------------------------

/**
 * Gets class properties values from WeakMap
 * @function
 * @return {string | number}
 * @private
 */
const _get = WeakMap.prototype.get;

/**
 * Stores class properties values to WeakMap
 * @function
 * @return {string | number}
 * @private
 */
const _set = WeakMap.prototype.set;

// ----------------------------------------------------------------------------
// Private variables
// ----------------------------------------------------------------------------

/**
 * Language name abbr.
 * @type {WeakMap}
 * @private
 */
const _abbreviation = new WeakMap();

/**
 * Language full name.
 * @type {WeakMap}
 * @private
 */
const _name = new WeakMap();

/**
 * Language id number.
 * @type {WeakMap}
 * @private
 */
const _id = new WeakMap();

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export { Language };
