import {ScrollDown} from "../observers/ScrollDown";
import {ScrollUp} from "../observers/ScrollUp";
import {ScrollDownEvent} from "../events/ScrollDownEvent";
import {ScrollUpEvent} from "../events/ScrollUpEvent";

class Scroll {

    private readonly _scrollDown: ScrollDown;
    private readonly _scrollUp  : ScrollUp  ;

    constructor(el: HTMLElement){

        //init class properties
        {
            this._scrollDown = new ScrollDown(el);
            this._scrollUp   = new ScrollUp  (el);
        }
    }

    public on(
        eventName: ScrollEvents.ScrollDown,
        callBack : ScrollDownEvent): void;
    public on(
        eventName: ScrollEvents.ScrollUp,
        callBack : ScrollUpEvent): void;
    public on(
        eventName: any,
        callBack: any): void{

        switch (eventName) {
            case ScrollEvents.ScrollDown:
                this._scrollDown.on(callBack);
                break;
            case ScrollEvents.ScrollUp:
                this._scrollUp.on(callBack);
                break;
        }
    }

    public off(
        eventName: ScrollEvents.ScrollDown,
        callBack : ScrollDownEvent): void;
    public off(
        eventName: ScrollEvents.ScrollUp,
        callBack : ScrollUpEvent): void;
    public off(
        eventName: any,
        callBack: any): void{

        switch (eventName) {
            case ScrollEvents.ScrollDown:
                this._scrollDown.off(callBack);
                break;
            case ScrollEvents.ScrollUp:
                this._scrollUp.off(callBack);
                break;
        }
    }
}

export {Scroll};