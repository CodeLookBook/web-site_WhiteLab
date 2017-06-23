<template lang="pug">

    layout
        | Привет

</template>
<style lang="sass">

    @import ../../../sass/mixins
    @import ../../../sass/variables

</style>
<script lang="ts">

    //-------------------------------------------------------------------------
    // App router
    //-------------------------------------------------------------------------

    import {router} from "../../router/router";

    //-------------------------------------------------------------------------
    // App store
    //-------------------------------------------------------------------------

    import {store}  from "../../store/store";
    import Vue from "vue";
    import VueRouter from "vue-router";
    import {Store} from "vuex";

    //-------------------------------------------------------------------------
    // Import app components
    //-------------------------------------------------------------------------

    import Layout   from "./layout.vue";

    //-------------------------------------------------------------------------
    // App component.
    //-------------------------------------------------------------------------

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
                appClient: null,

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
        },

        mounted() {
        },
        components: {
           Layout
        }
    });

</script>