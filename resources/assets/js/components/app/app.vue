<template lang="pug">

    layout
        el-menu(
        slot="APP-TOP-NAVBAR",
        class="APP-TOP-NAVBAR",
        mode="horizontal")

            el-menu-item.LOGO-ITEM(index="/")
                img.LOGO(src="/img/logos/WhiteLab_Logo.png")

            el-menu-item.MENU-ITEM.TOGGLE-ITEM.HIDE-IF-MIN-WIDTH-700px(index="8")
                i.el-icon-menu

            el-menu-item.MENU-ITEM.BUTTON-ITEM.HIDE-IF-MAX-WIDTH-700px(index="2")
                el-button.BUTTON.ORDER-BUTTON Заказать

            el-submenu.MENU-ITEM.HIDE-IF-MAX-WIDTH-700px(index="3")
                template(slot="title" class="LANG-ITEM") Язык
                el-menu-item(index="3-1", @click="setRussianLanguage") Русский
                el-menu-item(index="3-2", @click="setEnglishLanguage") English
                el-menu-item(index="3-3", @click="setSlovakLanguage" ) Slovak

            el-menu-item.MENU-ITEM.PRICE-ITEM.HIDE-IF-MAX-WIDTH-700px(index="4", :route="{name: 'price'}") Вакансии
            el-menu-item.MENU-ITEM.PRICE-ITEM.HIDE-IF-MAX-WIDTH-700px(index="5", :route="{name: 'price'}") Цены

            el-menu-item.MENU-ITEM.SOCIAL-ITEM.HIDE-IF-MAX-WIDTH-700px(index="6")
                a(href="https://www.instagram.com" target="_blank"): img.ICON(src="/img/icons/in.png")

            el-menu-item.MENU-ITEM.SOCIAL-ITEM.HIDE-IF-MAX-WIDTH-700px(index="7")
                a(href="https://www.facebook.com" target="_blank"): img.ICON(src="/img/icons/fb.png")

        router-view

</template>
<style lang="sass">

    @import ../../../sass/mixins
    @import ../../../sass/variables

    $color-1: #ff627b
    $color-5: #f0566d
    $color-2: white
    $color-3: #20A0FF
    $color-4: #1d89dd

    .HIDE-IF-MAX-WIDTH-700px
        @media (max-width: 700px)
            display: none
    .HIDE-IF-MIN-WIDTH-700px
        @media (min-width: 700px)
            display: none

    .APP-TOP-NAVBAR
        height: $top-navbar-height !important

        @media(min-width: 850px)
            padding: 0 10% 0 10% !important
        @media(max-width: 849px)
            padding: 0 5% 0 5% !important

        .LOGO-ITEM
            line-height: 74px !important
            height: 100% !important
            border: none !important
            &:hover
                border: none !important

            .LOGO
                display: inline-block
                +size(auto, 1.5em)

        .MENU-ITEM
            float: right !important
            height: 100% !important

        .SOCIAL-ITEM
            line-height: 72px !important

            .ICON
                display: inline-block
                +size(auto, 1.2em)
                opacity: 0.5

            &:hover .ICON
                opacity: 1

        .PRICE-ITEM
            line-height: 64px !important

        .el-submenu__title
            line-height: 64px !important
            height: 100% !important

        .BUTTON-ITEM
            //line-height: 57px !important
            border: none !important

            &:hover
                border: none !important

            .BUTTON
                display: inline-block

            .ORDER-BUTTON
                width: 6em
                color: $color-2
                border: $color-2
                background-color: $color-1
                &:hover
                    border: 1px white
                &:active
                    background-color: $color-5

        .TOGGLE-ITEM
            line-height: 72px !important
            border: none !important
            color: $color-3

            &:hover .el-icon-menu
                color: $color-3
            &:active .el-icon-menu
                color: $color-4

            .el-icon-menu
                font-size: 1.7em



</style>
<script>

    //*************************************************************************
    // IMPORT UTILITIES
    //*************************************************************************


    //*************************************************************************
    // IMPORT CHILD COMPONENTS
    //*************************************************************************

    import Layout
            from './layout.vue';
    import ElMenu
            from "../../../../../node_modules/element-ui/packages/menu/src/menu";
    import ElMenuItem
            from "../../../../../node_modules/element-ui/packages/menu/src/menu-item";
    import ElButton
            from "../../../../../node_modules/element-ui/packages/button/src/button";

    //*************************************************************************
    // COMPONENT
    //*************************************************************************

    export default {

        //*********************************************************************
        // MOUNT ELEMENT
        //*********************************************************************

        el: "#app",

        //*********************************************************************
        // PROPERTIES
        //*********************************************************************


        //*********************************************************************
        // DATA FIELDS
        //*********************************************************************

        data(){
            return {
                //App manager.
                appClient: null,

                //App settings
                settings:{
                    uiLanguage: null,   //UI language
                    uiElements: null,   //page buttons
                },
            };
        },

        //*********************************************************************
        // COMPUTED FIELDS
        //*********************************************************************


        //*********************************************************************
        // WATCHED FIELDS
        //*********************************************************************

        watch:{
            "settings.uiLanguage"(newVal, oldVal){

    /*            let appLanguage = newVal,
                    routeName   = this.$router.currentRoute.name,
                    factory     = new HomePageButtonsFactory(),
                    uiButtons;

                switch (routeName) {
                    case 'app':
                    case 'home':
                        uiButtons = factory.create(appLanguage.ID);
                        break;

                    default:
                        throw new Error("Can't create app buttons for" +
                            "the selected router name. Router is undefined");
                }

                this.settings.uiElements = uiButtons;

                console.log('app => watch => settings.uiLanguage() => uiButtons: ');
                console.log(uiButtons);*/
            }
        },

        //*********************************************************************
        // METHODS
        //*********************************************************************

        methods:{
        },

        //*********************************************************************
        // LIFE HOOKS
        //*********************************************************************

        mounted(){

        },

        //*********************************************************************
        // CHILD COMPONENTS
        //*********************************************************************

        components:{
            ElButton,
            ElMenuItem,
            ElMenu,
            Layout,
        }

    };

</script>