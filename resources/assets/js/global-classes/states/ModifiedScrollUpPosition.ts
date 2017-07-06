import {ObservableState           } from "../../global-abstarct-classes/ObservableState";
import {IScrollPx                 } from "../../global-interfaces/IScrollPx";
import {ScrollUpEvent             } from "../events/ScrollUpEvent";
import {IEventHandlerType         } from "../../global-interfaces/IEventHandlerType";
import {Observable                } from "../../global-abstarct-classes/Observable";
import {UnmodifiedScrollUpPosition} from "./UnmodifiedScrollUpPosition";

class ModifiedScrollUpPosition extends ObservableState <IScrollPx, ScrollUpEvent>{

    constructor(
        newValue : IScrollPx,
        oldValue : IScrollPx,
        observers: IEventHandlerType<ScrollUpEvent>[],
        owner    : Observable<IScrollPx, ScrollUpEvent>) {

        super(newValue, oldValue, observers, owner);
        this.notify();
    }

    protected changeState(
        newValue : IScrollPx,
        oldValue : IScrollPx,
        observers: IEventHandlerType<ScrollUpEvent>[],
        owner    : Observable<IScrollPx, ScrollUpEvent>): void {

        if(this.new.value === newValue.value){
            this.owner.state = new UnmodifiedScrollUpPosition(
                this.new      ,
                this.old      ,
                this.observers,
                this.owner    ,
            );
        } else {
            this.owner.state = new ModifiedScrollUpPosition(
                newValue ,
                oldValue ,
                observers,
                owner    ,
            );
        }
    }

    public createEvent(): ScrollUpEvent {

        const newPosition: IScrollPx = {...this.new};
        const oldPosition: IScrollPx = {...this.old};

        return new ScrollUpEvent(newPosition, oldPosition);
    }

    public notify(): void {

        const length: number = this.observers.length;

        if(length > 0){

            const event : ScrollUpEvent = this.createEvent();
            this.observers.forEach(func => func(event));
        }
    }
}

export {ModifiedScrollUpPosition};
