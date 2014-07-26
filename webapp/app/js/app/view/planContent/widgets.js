define(['backbone',
        'jquery',
        "text!template/planContent/widgets.html",
        'jquery-ui',
        "jquerySlide",
        "typeahead"
    ], function (Backbone, jQuery, Template) {
        "use strict";

        var View = Backbone.View.extend({
            id: 'widget',
            events : {
                'mouseenter #history': 'expand',
                'mouseleave #history': 'collapse'
            },
            initialize: function (){
                this.render();
            },
            render : function () {
                this.$el.append(Template);
                $('#planView').append(this.el);
                this.$el.find('.panel-body').hide();
                this.draggable();
            },
            draggable : function () {
                $('#history').draggable();
            },
            expand: function () {
                this.$el.find('.panel-body').slideDown('fast');
            },
            collapse: function () {
                this.$el.find('.panel-body').slideUp('fast');
            }
        });

        return View;

});