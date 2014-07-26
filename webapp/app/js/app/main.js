define(['backbone', 'jquery', 'app/router', 'app/view'], function (Backbone, jQuery, Router, View) {

      "use strict";
      var Router = Backbone.Router.extend({
            routes: {
                  "": "main"
            },
            main: function(){
                  var view = new View();
            }
      });

      var router = new Router();
      Backbone.history.start();
});



