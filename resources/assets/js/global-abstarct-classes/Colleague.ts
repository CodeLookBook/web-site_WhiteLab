import {Mediator} from "./Mediator";

//----------------------------------------------------------------------------
// Observable abstract class.
// ----------------------------------------------------------------------------
/**
 * - It's a part of the "Mediator" pattern;
 */
abstract class Colleague<T> {

    protected readonly _mediator: Mediator<T>;

    constructor(mediator: Mediator<T>){
        this._mediator = mediator;
    }
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {Colleague};