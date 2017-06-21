// @flow

import { Language } from "./Language";

// ----------------------------------------------------------------------------
// ButtonInfo class
// ----------------------------------------------------------------------------

/**
 * Contains information about button.
 * @property {Language} language Language class instance.
 * @property {string} name Language name.
 * @property {number} id Language identifier.
 */
class ButtonInfo {

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     * @param {Language} language Language class instance.
     * @param {string} name Language name.
     * @param {string} id Language identifier.
     */
    constructor(language: Language, name: string, id: number) {
        // Init private variables.
        _set.call(_language, this, language);
        _set.call(_name, this, name);
        _set.call(id, this, id);
    }

    // ------------------------------------------------------------------------
    // Public getters and setters.
    // ------------------------------------------------------------------------

    /**
     * Store information about button language.
     * @param {Language} language Language class instance.
     */
    set language(language: Language): void {
        _set.call(_language, this, language);
    }

    /**
     * Retrieve information about button language.
     * @return {Language}
     */
    get language(): Language {

        // Retrieve _language  - private property.
        return _get.call(_language, this);
    }

    /**
     * Stores button name.
     * @param {string} name Button name.
     */
    set name(name: string): void {
        _set.call(_name, this, name);
    }

    /**
     * @return {Language} Button name
     */
    get name(): string {
        return _get.call(_name, this);
    }

    /**
     * Stores button id.
     * @param {number} id Button id.
     */
    set id(id: number): void {
        _set.call(_id, this, id);
    }

    /**
     * @return {number} Button id.
     */
    get id(): number {
        return _get.call(_id, this);
    }

}

// ----------------------------------------------------------------------------
// Private functions
// ----------------------------------------------------------------------------

/**
 * Gets class properties from WeakMap
 * @function
 * @return {*}
 * @private
 */
const _get = WeakMap.prototype.get;

/**
 * Stores class properties to the WeakMap
 * @function
 * @return {*}
 * @private
 */
const _set = WeakMap.prototype.set;

// ----------------------------------------------------------------------------
// Private variables
// ----------------------------------------------------------------------------

/**
 * Stores button language.
 * @type {WeakMap}
 * @private
 */
const _language: WeakMap = new WeakMap();

/**
 * Stores button name.
 * @type {WeakMap}
 * @private
 */
const _name: WeakMap = new WeakMap();

/**
 * Stores button id.
 * @type {WeakMap}
 * @private
 */
const _id: WeakMap = new WeakMap();
