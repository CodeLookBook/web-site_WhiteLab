// ----------------------------------------------------------------------------
// Browser class events list.
// ----------------------------------------------------------------------------
/**
 * Gives convenient vay to declare Browser event name.
 */
var BrowserEvents;
(function (BrowserEvents) {
    BrowserEvents[BrowserEvents["ClientHeightChanged"] = 0] = "ClientHeightChanged";
    BrowserEvents[BrowserEvents["ClientWidthChanged"] = 1] = "ClientWidthChanged";
})(BrowserEvents || (BrowserEvents = {}));
// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------
export { BrowserEvents };
//# sourceMappingURL=BrowserEvents.js.map