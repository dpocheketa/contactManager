define(['plugins/router', "durandal/app"], function (router, app) {
    return {
        router: router,

        search: function() {
            app.showMessage("Not Implemented", "Error");
        },

        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/home', title: "Home", nav: true },
                { route: 'contact/:id', moduleId: 'viewmodels/contact', title: "Contact page", nav: false }
                /*{durandal:routes}*/
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});