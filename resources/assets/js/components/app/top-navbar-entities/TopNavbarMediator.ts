import {Mediator} from "../../../global-abstarct-classes/Mediator";
import {Colleague} from "../../../global-abstarct-classes/Colleague";
import MediatorEventNames from "../../../global-classes/enums/MediatorEventNames";
import {TopNavbar} from "./TopNavbar";

class TopNavbarMediator extends Mediator<MediatorEventNames> {

    private static _instance:  TopNavbarMediator | null = null;
    private _topNavbar: TopNavbar | null = null;

    protected  constructor(){
        super();
    }

    private static create(){
        return new TopNavbarMediator();
    }

    public static getInstance(){

        if(TopNavbarMediator._instance === null){
            TopNavbarMediator._instance = TopNavbarMediator.create();
        }

        return TopNavbarMediator._instance;
    }

    get topNavbar(): TopNavbar   {

        if(this._topNavbar === null){
            throw new ReferenceError("'this.topNavbar' instance is equal to " +
                "'null',");
        }

        return this._topNavbar;
    }

    set topNavbar(value: TopNavbar) {

        if(value === null){
            throw new ReferenceError("'TopNavbar' instance is equal to " +
                "'null',");
        }

        this._topNavbar = value;
    }

    public send(
        eventName: MediatorEventNames,
        colleague: Colleague<MediatorEventNames>): void {

        if(colleague instanceof TopNavbar){

            switch (eventName){
                case MediatorEventNames.Scrolled:

                    break;
            }
        }
    }

}

export {TopNavbarMediator};
