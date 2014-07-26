define(['backbone'], function (Backbone) {
    "use strict";

    var routerMain = Backbone.Router.extend({
        initialize : function () {
            console.log('initializebackbonerouter')
        },
        SideBarView: {},
        HeaderView: {}
    });
    return routerMain;
});