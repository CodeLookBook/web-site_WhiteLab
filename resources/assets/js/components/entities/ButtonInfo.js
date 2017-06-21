// @flow

import { Language } from "./Language";

/**
 * ButtonInfo class.
 * Contain main information about button.
 * @property {Language} language
 * @property {string} name
 * @property {number} id
 */
class ButtonInfo {
    /**
     * @param {Language} language
     * @param {string} name
     * @param {string} id
     */
    constructor(language: Language, name: string, id: number) {
        _set.call(_language, this, language);
        _set.call(_name, this, name);
        _set.call(id, this, id);
    }

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
