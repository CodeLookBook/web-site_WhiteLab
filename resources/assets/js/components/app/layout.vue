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
                +size    (100%, $top-navbar-slot-height)

            .CONTENT-SLOT
                +position(r, $t:0, $l:0)
                overflow: auto

</style>
<script lang="ts">

    //-------------------------------------------------------------------------
    // Import libraries.
    //-------------------------------------------------------------------------

    import Vue from "vue";

    //-------------------------------------------------------------------------
    // Child components import
    //-------------------------------------------------------------------------

    import { Browser } from "./Browser";


    interface I {
        w: number,
    }

    function myFun (v: I) {

    }
    myFun({w: 1000});

    //-------------------------------------------------------------------------
    // Component
    //-------------------------------------------------------------------------

    export default Vue.extend({

        //---------------------------------------------------------------------
        // Properties
        //---------------------------------------------------------------------

        //---------------------------------------------------------------------
        // Data fields
        //---------------------------------------------------------------------

        data() {
            return {
                browser: new Browser(0, 0),
            }
        },

        //---------------------------------------------------------------------
        // COMPUTED FIELDS
        //---------------------------------------------------------------------


        //---------------------------------------------------------------------
        // WATCHED FIELDS
        //---------------------------------------------------------------------

        watch:{

            'browser.clientHeight'(newV: number, oldV: number): void {

                this.setContentSlotHeight();

            }

        },

        //---------------------------------------------------------------------
        // METHODS
        //---------------------------------------------------------------------

        methods:{

            saveBrowserClientHeight(): void{

                let h = document.documentElement.clientHeight ||
                        document.body.clientHeight;

                this.browser.clientHeight = h;
            },

            getMainContentSlotHeight(): number{

                let el: object        = this.$refs.mainContentSlot;
                let rectangle: object = el.getBoundingClientRect();

                return rectangle.bottom - rectangle.top;
            },

            getTopNavbarSlotHeight(): number{

                let el: object        = this.$refs.topNavbarSlot;
                let rectangle: object = el.getBoundingClientRect();

                return rectangle.bottom - rectangle.top;
            },

            setContentSlotHeight(): void {

                let el = this.$refs.contentSlot,
                        mainContentSlotHeight = this.getMainContentSlotHeight(),
                        topNavbarSlotHeight = this.getTopNavbarSlotHeight();

                el.style.height = (mainContentSlotHeight -
                        topNavbarSlotHeight) + 'px'
            },


            subscribeOnEvent(): void {

                window.addEventListener('resize',this.saveBrowserClientHeight);

            },

            unsubscribeFromEvents(): void {

                window.removeEventListener('resize',this.saveBrowserClientHeight);

            },
        },

        //---------------------------------------------------------------------
        // LIFE HOOKS
        //---------------------------------------------------------------------

        mounted(){

            this.subscribeOnEvent();
            this.saveBrowserClientHeight();
            this.setContentSlotHeight();

        },

        beforeDestroy(){
            this.unsubscribeFromEvents();
        },

        //---------------------------------------------------------------------
        // CHILD COMPONENTS
        //---------------------------------------------------------------------


    });

</script>