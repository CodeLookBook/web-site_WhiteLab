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
        +position(r, $t:0, $l:0)
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
            +size    (100%, 100%)
            overflow: auto

            .TOP-NAVBAR-SLOT
                +position(r, $t:0, $l:0)
                +size    (100%, $top-navbar-slot-height)

            .CONTENT-SLOT
                +position(r, $t:0, $l:0)

</style>
<script lang="ts">

    //-------------------------------------------------------------------------
    // Import classes & objects.
    //-------------------------------------------------------------------------

    import Vue, {ComponentOptions} from "vue";
    import {LayoutFacade} from "./layout-entites/LayoutFacade";

    //-------------------------------------------------------------------------
    // Import child components
    //-------------------------------------------------------------------------

    //-------------------------------------------------------------------------
    // Component interface
    //-------------------------------------------------------------------------

    interface ILayout extends Vue{
        _layoutFacade: LayoutFacade | null;
    }

    //-------------------------------------------------------------------------
    // Component
    //-------------------------------------------------------------------------
    export default {

        //---------------------------------------------------------------------
        // Data fields
        //---------------------------------------------------------------------

        data() {
            return {
                _layoutFacade: null,
            };
        },

        //---------------------------------------------------------------------
        // LIFE HOOKS
        //---------------------------------------------------------------------

        mounted(){
            this._layoutFacade = new LayoutFacade(
                    this.$refs.mainContentSlot as HTMLElement,
                    this.$refs.topNavbarSlot   as HTMLElement,
                    this.$refs.contentSlot     as HTMLElement
            );
        },

        beforeDestroy(){

            if(this._layoutFacade !== null) {
                this._layoutFacade.destruct();
            }
        }

    } as ComponentOptions<ILayout>

</script>