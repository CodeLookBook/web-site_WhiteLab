// ----------------------------------------------------------------------------
// ButtonInfo class
// ----------------------------------------------------------------------------
/**
 * Contains information about button.
 * @property language - Language class instance.
 * @property name     - Language name.
 * @property id       - Language identifier.
 */
var ButtonInfo = (function () {
    /**
     * @param language - Language class instance.
     * @param name     - Language name.
     * @param id       -Language identifier.
     */
    function ButtonInfo(language, name, id) {
        this._language = language;
        this._name = name;
        this._id = id;
    }
    Object.defineProperty(ButtonInfo.prototype, "language", {
        /**
         * Retrieve information about button language.
         */
        get: function () {
            return this._language;
        },
        // ------------------------------------------------------------------------
        // Public getters and setters.
        // ------------------------------------------------------------------------
        /**
         * Store information about button language.
         * @param language - Language class instance.
         */
        set: function (language) {
            this._language = language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonInfo.prototype, "name", {
        /**
         * @return Button name
         */
        get: function () {
            return this._name;
        },
        /**
         * Stores button name.
         * @param name Button name.
         */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonInfo.prototype, "id", {
        /**
         * @return Button id.
         */
        get: function () {
            return this._id;
        },
        /**
         * Stores button id.
         * @param id Button id.
         */
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonInfo;
}());
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { ButtonInfo };
//# sourceMappingURL=ButtonInfo.js.map