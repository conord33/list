define(['backbone',
        'jquery',
        "text!template/header.html",
        'jquery-ui',
        "jquerySlide",
        "typeahead"
    ], function (Backbone, jQuery, Template) {
        "use strict";

        var View = Backbone.View.extend({
            el: 'header',
            events: {
                'click .navLv1': 'toggleLv1SelectedLink',
                'click .navLv2': 'toggleLv2SelectedLink'
            },
            initialize: function (){
                this.render();
            },
            render : function () {
                this.$el.append(Template);
            },
            toggleLv1SelectedLink : function (e) {
                var target = $(e.target);
                if(target.is('a')){
                    $('.navLv1 .active').removeClass('active');
                    target.closest('li').addClass('active');
                    if(target.hasClass('find')){
                        $('#homePage, #planView, .navLv2, .navLv3, #compareView').hide();
                        $('#findPlan').hide().fadeIn();
                    }else if(target.hasClass('homePage')){
                        $('#findPlan, #planView, .navLv2, .navLv3, #compareView').hide();
                        $('#homePage').hide().fadeIn();
                    }
                }
            },
            toggleLv2SelectedLink : function (e) {
            var target = $(e.target);
                if(target.is('a')){
                    $('.navLv2 .active').removeClass('active');
                    target.closest('li').addClass('active');
                }
            }
        });

        return View;

});