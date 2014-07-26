requirejs.config({
    catchError:true,
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',

    paths: {
    	"app": "../app",                //used as shortcut to navigate to app files
        "template": "../../template",   //used as shortcut to navigate to template files
        "data": "../../data",

        //declare paths for library dependencies
    	"jquery": "jquery.min",
    	"jquery-ui": "jquery-ui.min",
    	"bootstrap": "bootstrap.min",

    	"typeahead": "typeahead.min",
    	"jquerySlide": "jquery-slideExtend",

    	"underscore": "underscore.min",
    	"backbone": "backbone-min",
    	"handlebars": "handlebars",

    	"modernizr": "modernizr.min",
    },
    shim: {
        //create shims to properly handel non AMD libraries
        "backbone": {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        "bootstrap": {
            deps: ['jquery']
        },
        "handlebars": {
            deps: ['jquery'],
            exports: "Handlebars"
        }
	}
});

// Load the main app module to start the app
requirejs(['app/main'], function (Main) {
    "use strict";
    // Main.AppView();
});