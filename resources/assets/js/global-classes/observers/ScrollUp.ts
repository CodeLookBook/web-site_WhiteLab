import {Observable              } from "../../global-abstarct-classes/Observable";
import {IScrollPx               } from "../../global-interfaces/IScrollPx";
import {ScrollUpEvent           } from "../events/ScrollUpEvent";
import {ModifiedScrollUpPosition} from "../states/ModifiedScrollUpPosition";

class ScrollUp extends Observable<IScrollPx, ScrollUpEvent> {

    private readonly _htmlEl: HTMLElement;

    constructor(el: HTMLElement){
        super();

        // Init props.
        {
            this._htmlEl = el;

            const newPosition: IScrollPx = this.getScrollPosition();
            const oldPosition: IScrollPx = {value: 0, measure: 'px'};

            this.state = new ModifiedScrollUpPosition(
                newPosition,
                oldPosition,
                []         ,
                this       ,
            );
        }

        this._htmlEl.addEventListener('scroll', this.onScroll.bind(this));
    }

    protected createEvent(): ScrollUpEvent {
        return this.state.createEvent();
    }

    private getScrollPosition(): IScrollPx{
        return {
            value: this._htmlEl.scrollTop,
            measure: 'px'
        }
    }

    public notify(): void {

        if(this.state instanceof ModifiedScrollUpPosition){
            this.state.notify();
        }
    }

    private onScroll(): void{

        const newPosition = this.getScrollPosition();
        this.state.handleNewValue(newPosition);
    }
}

export {ScrollUp};
