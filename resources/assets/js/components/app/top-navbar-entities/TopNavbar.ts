import {DomElement} from "../../../global-abstarct-classes/DomElement";
import {TopNavbarMediator as Mediator} from "./TopNavbarMediator";

class TopNavbar extends DomElement{

    private static _instance: TopNavbar | null = null;

    private static create(el:HTMLElement, mediator: Mediator): TopNavbar{
        return new TopNavbar(el, mediator);
    }

    public static getInstance(el:HTMLElement, mediator: Mediator): TopNavbar{

        if(TopNavbar._instance === null){
            TopNavbar._instance = TopNavbar.create(el, mediator);
        }

        return TopNavbar._instance;
    }
}

export {TopNavbar};
