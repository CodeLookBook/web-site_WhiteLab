<template lang="pug">

    layout
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

    // App router
    import {router} from "../../router/router";

    // App store
    import {store}  from "../../store/store";

    //-------------------------------------------------------------------------
    // Import app components.
    //-------------------------------------------------------------------------

    import Layout   from "./layout.vue";
    import * as VueRouter from "vue-router";
    import Vuex from "vuex";

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
            Layout
        }
    } as ComponentOptions<IApp>;


</script>