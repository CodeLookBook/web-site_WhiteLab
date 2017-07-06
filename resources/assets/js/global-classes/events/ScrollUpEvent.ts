import {IScrollPx} from "../../global-interfaces/IScrollPx";

class ScrollUpEvent {

    private readonly _newPosition: IScrollPx;
    private readonly _oldPosition: IScrollPx;

    constructor(newPosition: IScrollPx, oldPosition: IScrollPx){
        this._newPosition = newPosition;
        this._oldPosition = oldPosition;
    }

    get newPosition(): IScrollPx{
        return {...this._newPosition};
    }

    get oldPosition(): IScrollPx {
        return {...this._oldPosition};
    }
}

export {ScrollUpEvent};
