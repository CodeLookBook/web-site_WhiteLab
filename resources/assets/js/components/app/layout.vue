<template lang="pug">

    .APP-LAYOUT
        .SIDE-NAVBAR-SLOT
            slot(name="APP-SIDE-NAVBAR")
        .MAIN-CONTENT-SLOT(ref="mainContentSlot")
            .TOP-NAVBAR-SLOT(ref="topNavbarSlot")
                slot(name="APP-TOP-NAVBAR")
            .CONTENT-SLOT(ref="contentSlot")
                slot

</template>
<style lang="sass">

    @import ../../../sass/mixins
    @import ../../../sass/variables

    .APP-LAYOUT
        +position(a, $t:0, $l:0)
        +size    (100%, 100%)
        overflow: hidden

        .SIDE-NAVBAR-SLOT
            +position(a, $t:0, $l:-100%)
            +size    ($h:100%)
            overflow: auto

            @media(min-width: 321px)
                width: 320px

            @media(max-width: 320px)
                width: 100%

        .MAIN-CONTENT-SLOT
            +position(a, $t:0, $l:0)
            +size    (100%,100%)
            overflow: hidden

            .TOP-NAVBAR-SLOT
                +position(r, $t:0, $l:0)
                +size    (100%, $top-navbar-height)

            .CONTENT-SLOT
                +position(r, $t:0, $l:0)
                overflow: auto

</style>
<script>

    //*************************************************************************
    // CHILD COMPONENTS IMPORT
    //*************************************************************************

    import {Browser} from "../../entities/DTO/Browser"

    //*************************************************************************
    // COMPONENT
    //*************************************************************************

    export default {

        //*********************************************************************
        // PROPERTIES
        //*********************************************************************


        //*********************************************************************
        // DATA FIELDS
        //*********************************************************************

        data(){
            return {
                browser: new Browser(),
            }
        },

        //*********************************************************************
        // COMPUTED FIELDS
        //*********************************************************************


        //*********************************************************************
        // WATCHED FIELDS
        //*********************************************************************

        watch:{

            'browser.clientHeight'(newV, oldV){

                this.SetContentSlotHeight();

            }

        },

        //*********************************************************************
        // METHODS
        //*********************************************************************

        methods:{

            SaveBrowserClientHeight(){


                let v = this,
                    d = document,
                    e = d.documentElement,
                    b = d.body,
                    h = e.clientHeight || b.clientHeight;

                v.browser.clientHeight = h;

            },

            /**
             * @return {number}
             */
            GetMainContentSlotHeight(){

                let v = this,
                    r = v.$refs,
                    el= r.mainContentSlot,
                    rect = el.getBoundingClientRect(),
                    h = rect.bottom - rect.top;

                return h;
            },
            /**
             * @return {number}
             */
            GetTopNavbarSlotHeight(){

                let v = this,
                    r = v.$refs,
                    el= r.topNavbarSlot,
                    rect = el.getBoundingClientRect(),
                    h = rect.bottom - rect.top;

                return h;
            },
            SetContentSlotHeight(){

                let v = this,
                    r = v.$refs,
                    el= r.contentSlot,
                    s = el.style;

                s.height = (() => {

                    let v = this,
                        mainContentSlotHeight = v.GetMainContentSlotHeight(),
                        topNavbarSlotHeight = v.GetTopNavbarSlotHeight();

                    return () => {
                        return (mainContentSlotHeight - topNavbarSlotHeight) + 'px';
                    }
                })()();

            },


            SubscribeOnEvent(){

                let v = this,
                    w = window;

                w.addEventListener('resize',v.SaveBrowserClientHeight);

            },
            UnsubscribeFromEvents(){

                let v = this,
                    w = window;

                v.removeEventListener('resize',w.SaveBrowserClientHeight);

            },
        },

        //*********************************************************************
        // LIFE HOOKS
        //*********************************************************************

        mounted(){

            let v = this;

            v.SubscribeOnEvent();
            v.SaveBrowserClientHeight();
            v.SetContentSlotHeight();

        },

        beforeDestroy(){

            let v = this;

            this.UnsubscribeFromEvents();

        },

        //*********************************************************************
        // CHILD COMPONENTS
        //*********************************************************************


    };

</script>