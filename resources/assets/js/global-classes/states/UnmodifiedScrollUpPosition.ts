import {IScrollPx                   } from "../../global-interfaces/IScrollPx";
import {ScrollUpEvent             } from "../events/ScrollUpEvent";
import {IEventHandlerType           } from "../../global-interfaces/IEventHandlerType";
import {Observable                  } from "../../global-abstarct-classes/Observable";
import {ModifiedScrollUpPosition  } from "./ModifiedScrollUpPosition";
import {ObservableState             } from "../../global-abstarct-classes/ObservableState";

class UnmodifiedScrollUpPosition  extends  ObservableState<IScrollPx,
    ScrollUpEvent>{

    protected changeState(
        newValue : IScrollPx,
        oldValue : IScrollPx,
        observers: IEventHandlerType<ScrollUpEvent>[],
        owner    : Observable<IScrollPx, ScrollUpEvent>): void {

        if(this.new.value !== newValue.value){
            this.owner.state = new ModifiedScrollUpPosition(
                newValue ,
                oldValue ,
                observers,
                owner    ,
            );
        } else {
            this.owner.state = new UnmodifiedScrollUpPosition(
                this.new      ,
                this.old      ,
                this.observers,
                this.owner    ,
            );
        }
    }

    public createEvent(): ScrollUpEvent {

        const newPosition: IScrollPx = {...this.new};
        const oldPosition: IScrollPx = {...this.old};

        return new ScrollUpEvent(newPosition, oldPosition);
    }
}

export {UnmodifiedScrollUpPosition};
