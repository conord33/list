define(['backbone',
        'jquery',
        "text!template/planContent/planOptions.html",
        'jquery-ui',
        "jquerySlide",
        "typeahead"
    ], function (Backbone, jQuery, Template) {
        "use strict";

        var View = Backbone.View.extend({
            id: 'planOptionsContainer',
            initialize: function (){
                this.render();
            },
            render : function () {
                this.$el.html(Template);
            }
        });

        return View;

});