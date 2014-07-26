define(['backbone',
        'jquery',
        "handlebars",
        "text!template/planContent/benefits.html",
        "data/benefits",
        'jquery-ui',
        "jquerySlide",
        "typeahead",
        "bootstrap"
    ], function (Backbone, jQuery, Handlebars, Template, mockData) {
        "use strict";

        var View = Backbone.View.extend({
            id: 'benefitsContainer',
            initialize: function (){
                this.render();
            },
            render : function () {
                this.$el.html(Handlebars.compile(Template)(mockData));


                this.sortable();
                return this;
            },
            sortable : function () {
                $('.sortable').sortable();
                return this;
            }
        });

        return View;

});