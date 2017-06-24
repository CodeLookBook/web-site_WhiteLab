<template lang="pug">

    //layout
    div Привет {{appClient}}
        br
        div {{myMethodTest}}

</template>
<style lang="sass">

    @import ../../../sass/mixins
    @import ../../../sass/variables

</style>
<script >

    //-------------------------------------------------------------------------
    // App router
    //-------------------------------------------------------------------------

    import {router} from "../../router/router";

    //-------------------------------------------------------------------------
    // App store
    //-------------------------------------------------------------------------

    import {store}  from "../../store/store";
    import VueRouter from "vue-router";

    //-------------------------------------------------------------------------
    // Import app components
    //-------------------------------------------------------------------------

    //import Layout   from "./layout.vue";

    //-------------------------------------------------------------------------
    // App component.
    //-------------------------------------------------------------------------

    import {Browser} from "./Browser";
    import Vue from "vue";
    let b = new Browser();

    b._clientHeight = "efdf";

    export default Vue.extend({

        el: "#app",
        router: router,
        store : store,

        //---------------------------------------------------------------------
        // Data.
        //---------------------------------------------------------------------

        data() {
            return {
                // App manager.
                appClient: "Перменная",

                // App settings
                settings: {
                    uiLanguage: null, // UI language
                    uiElements: null // page buttons
                }
            };
        },

        watch: {
        },

        //---------------------------------------------------------------------
        // Methods.
        //---------------------------------------------------------------------

        methods: {
            myMethodTest(): string{
                return "Method works fine!";
            }
        },

        mounted() {
        },
        components: {
           //Layout
        }
    });

</script>