//----------------------------------------------------------------------------
// Observable abstract class.
// ----------------------------------------------------------------------------
/**
 * - It's a part of the "Mediator" pattern;
 */
var Colleague = (function () {
    function Colleague(mediator) {
        this._mediator = mediator;
    }
    return Colleague;
}());
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { Colleague };
//# sourceMappingURL=Colleague.js.map