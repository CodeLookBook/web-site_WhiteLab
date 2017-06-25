<template lang="pug">

    //layout
    #test(ref="myDiv") Hello {{testVariable}}
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
    import Vue from "vue";

    // App router
    import {router} from "../../router/router";

    // App store
    import {store}  from "../../store/store";

    //-------------------------------------------------------------------------
    // Import app components.
    //-------------------------------------------------------------------------

    //import Layout   from "./layout.vue";

    //-------------------------------------------------------------------------
    // App component.
    //-------------------------------------------------------------------------

    let d: string = 1212;
    export default Vue.extend({

        el: "#app",
        router: router,
        store: store,

        data(): object {

            let  d: {testVariable: string} = {
                testVariable: "Variable value",
            };

            return d;
        },

        methods: {
//            myMethodTest(): string{
//                return this.testVariable;
//            },
        },
    });


</script>