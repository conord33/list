define(['backbone',
        'jquery',
        "text!template/findPlan.html",
        'jquery-ui',
        "jquerySlide",
        "typeahead"
    ], function (Backbone, jQuery, Template) {
        "use strict";

        var View = Backbone.View.extend({
            el: 'div.content',
            events: {
                'click #find': 'search',
                'click #edit': 'edit',
                'click .headerCriteria .glyphicon': 'addHeaderInput',
                'click .advancedSearch': 'advancedToggle',
                'click .freeTextSearch': 'freeTextToggle',
                'click #basicSearchLink': 'basicToggle',
                'click .headerCiteriaContentColumn.main.list-group a' : 'headerCriteriaToggleActive',
                'click .glyphicon-remove' : 'removeItem',
                'click .headerCriteriaToggle': 'toggleHeaderCriteriaSelectors',
                'click #searchResultTable table': 'selectResult',
                'click #back-to-list': 'backToList'
            },
            initialize: function (){
                this.render();
            },
            render: function() {
                this.$el.append(Template);
            },
            search : function (e) {
                e.preventDefault();
                 $('#findPlanSearch').hide();
                $('#searchResultTable table, #searchReference').fadeIn();
            },
            backToList : function () {
                $("#homePage").show();
                $("#findPlan").hide();
            },
            edit : function (e) {
                e.preventDefault();
                 $('#findPlanSearch').fadeIn();
                $('#searchResultTable table, #searchReference').hide();
            },
            addHeaderInput : function (e) {
                e.preventDefault();
                var val = $(e.currentTarget).siblings('input.headerCriteria').val();
                if(!(val === "")){
                    $(e.currentTarget).closest('.headerCriteria').append('<label style="margin-right: 4px; font-weight: normal;">'+val+'</label><input type="text" size="67"><br>');
                    $(e.currentTarget).siblings('input.headerCriteria').val('');
                }
            },
            advancedToggle : function () {
                $('#advancedSearchContent').slideToggle();
            },
            freeTextToggle : function () {
                $('#normalSearchContent').hide();
                $('#freeTextSearchContent').fadeIn();
            },
            basicToggle : function () {
                $('#freeTextSearchContent').hide();
                $('#normalSearchContent').fadeIn();
            },
            selectResult : function (e) {
                var target = $(e.target);

                if(target.hasClass('glyphicon')){
                    $('#findPlan').hide();
                    $('#compareView').fadeIn();
                }
                if(target.is('tbody td:not(:nth-child(1))')){
                    $('#findPlan').hide();
                    $('#planView, .navLv2, .navLv3').fadeIn();
                }
            },
            headerCriteriaToggleActive : function (e){
                $(e.currentTarget).closest('.headerCiteriaContentColumn').find('a').removeClass('active');
                $(e.currentTarget).addClass('active');
                $('.headerCiteriaContentColumn.sub.list-group a').hide().fadeIn();
            },
            removeItem : function (e) {
                $(e.currentTarget).closest('tr').remove();
            },
            toggleHeaderCriteriaSelectors : function (e) {
                console.log('asdf');
                var $target = $(e.currentTarget);
                $('#headerCriteriaSelectors').slideToggle('fast');
                $target.toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
            }
        });

        return View;

});