// ----------------------------------------------------------------------------
// Language class
// ----------------------------------------------------------------------------
/**
 * Contains language description information.
 */
var Language = (function () {
    function Language() {
    }
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    /**
     * @param {string} abbreviation - Language name abbr.
     * @param {string} name         - Language name.
     * @param {number} id           - Language id number.
     */
    Language.prototype.construct = function (abbreviation, name, id) {
        this._abbreviation = abbreviation;
        this._name = name;
        this._id = id;
    };
    Object.defineProperty(Language.prototype, "abbreviation", {
        /**
         * @return {string} - Language name abbreviation.
         */
        get: function () {
            return this._abbreviation;
        },
        // ------------------------------------------------------------------------
        // Public getters and setters.
        // ------------------------------------------------------------------------
        /**
         * @param {string} abbr - Language name abbreviation.
         */
        set: function (abbr) {
            this._abbreviation = abbr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Language.prototype, "name", {
        /**
         * @return {string} - Language name.
         */
        get: function () {
            return this._name = name;
        },
        /**
         * @param {string} name - Language name.
         */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Language.prototype, "id", {
        /**
         * @return {string} - Language name.
         */
        get: function () {
            return this._id;
        },
        /**
         * @param {number} id - Language name.
         */
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    return Language;
}());
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { Language };
//# sourceMappingURL=Language.js.map