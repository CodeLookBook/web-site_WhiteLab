//-----------------------------------------------------------------------------
// Import
//-----------------------------------------------------------------------------

import VueRouter    from "vue-router";
import routes from "./routes"

//-----------------------------------------------------------------------------
// App router object
//-----------------------------------------------------------------------------

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------

export {router};
