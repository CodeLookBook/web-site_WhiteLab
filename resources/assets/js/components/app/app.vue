<template lang="pug">

    layout
        top-navbar(slot="APP-TOP-NAVBAR")

        router-view

</template>
<style lang="sass">

    @import ../../../sass/mixins
    @import ../../../sass/variables

</style>
<script lang="ts">

    //-------------------------------------------------------------------------
    // Import classes & objects.
    //-------------------------------------------------------------------------

    //Vue class.
    import Vue, { ComponentOptions } from "vue";

    //VueRouter.
    import * as VueRouter from "vue-router";


    // App router
    import {router} from "../../router/router";

    // App store
    import {store}  from "../../store/store";

    //-------------------------------------------------------------------------
    // Import app components.
    //-------------------------------------------------------------------------

    import Layout   from "./layout.vue";
    import TopNavbar from "./top-navbar";

    //-------------------------------------------------------------------------
    // App interface.
    //-------------------------------------------------------------------------

    interface IApp extends Vue {
        el        : string;
        router    : VueRouter;
        components: object;
    }

    //-------------------------------------------------------------------------
    // App component.
    //-------------------------------------------------------------------------

    export default {
        el: "#app",
        router: router,
        store: store,
        components:{
            Layout,
            TopNavbar,
        }
    } as ComponentOptions<IApp>;

</script>