import {TopNavbar} from "./TopNavbar";
import {TopNavbarMediator} from "./TopNavbarMediator";
import {Scroll           } from "../../../global-classes/facades/Scroll";

class TopNavbarFacade {

    private readonly _topNavbarMediator: TopNavbarMediator;
    private readonly _topNavbar        : TopNavbar;
    private readonly _scroll           : Scroll;

    constructor(topNavbar: HTMLElement){

        // Init properties
        {
            this._topNavbarMediator = TopNavbarMediator.getInstance();
            this._topNavbar = new TopNavbar(topNavbar, this._topNavbarMediator);

            this._topNavbarMediator.topNavbar = this._topNavbar;
        }

        // Subscribe on JS native events.
        {
            topNavbar.addEventListener(
                'scroll',
                this.scrollEventHandler.bind(this)
            );
        }
    }

    public construct(): void {

    }

    private scrollEventHandler(){
    }

    public destract(): void {

    }
}