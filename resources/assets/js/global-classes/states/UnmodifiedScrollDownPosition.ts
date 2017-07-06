import {IScrollPx                   } from "../../global-interfaces/IScrollPx";
import {ScrollDownEvent             } from "../events/ScrollDownEvent";
import {IEventHandlerType           } from "../../global-interfaces/IEventHandlerType";
import {Observable                  } from "../../global-abstarct-classes/Observable";
import {ModifiedScrollDownPosition  } from "./ModifiedScrollDownPosition";
import {ObservableState             } from "../../global-abstarct-classes/ObservableState";

class UnmodifiedScrollDownPosition  extends  ObservableState<IScrollPx,
    ScrollDownEvent>{

    protected changeState(
        newValue : IScrollPx,
        oldValue : IScrollPx,
        observers: IEventHandlerType<ScrollDownEvent>[],
        owner    : Observable<IScrollPx, ScrollDownEvent>): void {

        if(this.new.value !== newValue.value){
            this.owner.state = new ModifiedScrollDownPosition(
                newValue ,
                oldValue ,
                observers,
                owner    ,
            );
        } else {
            this.owner.state = new UnmodifiedScrollDownPosition(
                this.new      ,
                this.old      ,
                this.observers,
                this.owner    ,
            );
        }
    }

    public createEvent(): ScrollDownEvent {

        const newPosition: IScrollPx = {...this.new};
        const oldPosition: IScrollPx = {...this.old};

        return new ScrollDownEvent(newPosition, oldPosition);
    }
}

export {UnmodifiedScrollDownPosition};