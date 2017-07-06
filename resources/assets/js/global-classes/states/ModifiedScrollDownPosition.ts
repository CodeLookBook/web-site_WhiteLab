import {ObservableState             } from "../../global-abstarct-classes/ObservableState";
import {IScrollPx                   } from "../../global-interfaces/IScrollPx";
import {ScrollDownEvent             } from "../events/ScrollDownEvent";
import {IEventHandlerType           } from "../../global-interfaces/IEventHandlerType";
import {Observable                  } from "../../global-abstarct-classes/Observable";
import {UnmodifiedScrollDownPosition} from "./UnmodifiedScrollDownPosition";

class ModifiedScrollDownPosition extends ObservableState <IScrollPx, ScrollDownEvent>{

    constructor(
        newValue : IScrollPx,
        oldValue : IScrollPx,
        observers: IEventHandlerType<ScrollDownEvent>[],
        owner    : Observable<IScrollPx, ScrollDownEvent>) {

        super(newValue, oldValue, observers, owner);
        this.notify();
    }

    protected changeState(
        newValue : IScrollPx,
        oldValue : IScrollPx,
        observers: IEventHandlerType<ScrollDownEvent>[],
        owner    : Observable<IScrollPx, ScrollDownEvent>): void {

        if(this.new.value === newValue.value){
            this.owner.state = new UnmodifiedScrollDownPosition(
                this.new      ,
                this.old      ,
                this.observers,
                this.owner    ,
            );
        } else {
            this.owner.state = new ModifiedScrollDownPosition(
                newValue ,
                oldValue ,
                observers,
                owner    ,
            );
        }
    }

    public createEvent(): ScrollDownEvent {

        const newPosition: IScrollPx = {...this.new};
        const oldPosition: IScrollPx = {...this.old};

        return new ScrollDownEvent(newPosition, oldPosition);
    }

    public notify(): void {

        const length: number = this.observers.length;

        if(length > 0){

            const event : ScrollDownEvent = this.createEvent();
            this.observers.forEach(func => func(event));
        }
    }
}

export {ModifiedScrollDownPosition};
