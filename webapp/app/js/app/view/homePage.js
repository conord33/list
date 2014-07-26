define(['backbone',
        'jquery',
        "text!template/homePage.html",
        'jquery-ui',
        "jquerySlide",
        "typeahead"
    ], function (Backbone, jQuery, Template) {
        "use strict";

        var View = Backbone.View.extend({
            el: 'div.content',
            events: {
                "click .share-button": "shareClicked"
            },
            initialize: function (){
                console.log('asdf');
                this.render();
            },
            render: function() {
                this.$el.append(Template);
            },
            shareClicked: function () {
                $("#homePage").hide();
                $("#findPlan").show();
            }
        });
        return View;
});