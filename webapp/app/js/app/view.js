define(['backbone',
        'jquery',
        "text!template/app-view.html",
        "app/view/header",
        "app/view/findPlan",
        "app/view/homePage",
        'jquery-ui',
        "jquerySlide",
        "bootstrap",
        "typeahead"
    ], function (Backbone, jQuery, Template, HeaderView, AsideView, FindPlanView, CompareView, PlanContentView, HomePageView) {

    "use strict";
        var View = Backbone.View.extend({
            el: '#appContainer',
            events: {
                'click #sidebar1': 'maximizeWidget',
                'click .glyphicon-circle-arrow-left': 'minimizeWidget'
            },
            initialize: function (){
                this.render();
            },
            render: function () {
                this.$el.append(Template)
                var headerView = new HeaderView();
                var asideView = new AsideView();
                var findPlanView = new FindPlanView();
                var compareView = new CompareView();
                var planContentView = new PlanContentView();
                var homePageView = new HomePageView();

                HealthPC.init();
                this.typeAhead();
                return this;
            },
            minimizeWidget : function (e) {
                if($(e.currentTarget).closest('#history').length !== 0){
                    $('#history').slideRightHide();
                    $('#historyMinimizer').show();
                }
            },
            maximizeWidget : function (e) {
                //click minimizer ==> restore section, remove from minimizer
                e.preventDefault();
                var target = $(e.target);
                var asideWidth;

                if(target.hasClass('iconMinimizer')){
                   $('#'+$(target).attr('id').replace('Minimizer', '')).slideLeftShow();
                   target.hide();
                }
            },
            typeAhead : function(){
                $('input.percent').autocomplete({
                  minLength: 0,
                  source: ['--', 'N/A', ' 5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%']
                });
                $('input.percent').click(function() { $(this).autocomplete("search", ""); });

                $('input.headerCriteria').autocomplete({
                  minLength: 0,
                  source: ['Benefit Period', 'Business Entity', 'Claims System', 'Customization', 'Level', 'Description', 'Funding', 'Arrangement', 'Line of Business', 'Market Segment', 'Market', 'Unit', 'Plan', 'Design', 'Product', 'Family', 'Product', 'Name', 'State', 'Status']
                });
                $('input.headerCriteria').click(function() { $(this).autocomplete("search", ""); });

                $('input.freeText').autocomplete({
                  minLength: 1,
                  source: ['Benefit Period', 'Business Entity', 'Claims System', 'Customization', 'Level', 'Description', 'Funding', 'Arrangement', 'Line of Business', 'Market Segment', 'Market', 'Unit', 'Plan', 'Design', 'Product', 'Family', 'Product', 'Name', 'State', 'Status']
                });
                // $('input.headerCriteria').click(function() { $(this).autocomplete("search", ""); });


                $('input.dollarsLarge').autocomplete({
                  minLength: 0,
                  source: ['$0', '$25', '$50', '$75', '$100', '$125', '$150', '$175', '$200', '$225', '$250', '$275', '$300', '$325', '$350', '$375', '$400', '$425', '$450', '$475', '$500', '$525', '$550', '$575', '$600', '$625', '$650', '$675', '$700', '$725', '$750', '$775', '$800', '$825', '$850', '$875', '$900', '$925', '$950', '$975', '$1,000', '$1,025','$1,050','$1,075','$1,100','$1,125','$1,150','$1,175','$1,200','$1,225','$1,250','$1,275','$1,300','$1,325','$1,350','$1,375','$1,400','$1,425','$1,450','$1,475','$1,500']
                });
                $('input.dollarsLarge').click(function() { $(this).autocomplete("search", ""); });

                $('input.accum').autocomplete({
                  minLength: 0,
                  source: ['', 'Aggregate Non Embedded Deductible']
                });
                $('input.accum').click(function() { $(this).autocomplete("search", ""); });

                $('input.yesNo').autocomplete({
                  minLength: 0,
                  source: ['Yes', 'No']
                });
                $('input.yesNo').click(function() { $(this).autocomplete("search", ""); });

                //BENEFITS SECTION
                $('input.specialtyCode').autocomplete({
                  minLength: 0,
                  source: ['NonForm', 'FormTier1', 'FormTier2', 'FormTier3', 'FormTier4']
                });
                $('input.specialtyCode').click(function() { $(this).autocomplete("search", ""); });

                $('input.placeOfService').autocomplete({
                  minLength: 0,
                  source: ['Mail']
                });
                $('input.placeOfService').click(function() { $(this).autocomplete("search", ""); });

                $('input.diagnosisCode').autocomplete({
                  minLength: 0,
                  source: ['All']
                });
                $('input.diagnosisCode').click(function() { $(this).autocomplete("search", ""); });
            }
        });




var HealthPC = {
    $el : $(document),
    init : function () {
        this.history();

        this.radioButtons();
        this.radioBtnTable();
    },

    radioButtons: function(){
        $('.panel-heading a').on('click', function(e){
            e.preventDefault();
            $(':radio').prop('checked',false);
            $(this).find(':radio').prop('checked',true);
        });
    },
    radioBtnTable : function () {
        $('.radioSelectType').on('click', function(){

            $('table.selectOneType tbody tr').find(':radio').each(function(){

                if($(this).hasClass('coinsuranceRadio')){
                    $(this).prop('checked', true);
                    $(this).closest('tr').find('.coinsuranceInput').css('opacity', '');
                }

            });
            $('table.selectOneType tbody tr').find('td').each(function(){
                if($(this).hasClass('copayInput')){
                    $(this).css('opacity', 0.1);
                }
            });

        });

        $('table.selectOneType tbody tr').find(':radio').on('click', function(){
            if($(this).hasClass('coinsuranceRadio')){
                $(this).closest('tr').find('.copayInput').css('opacity', 0.1);
                $(this).closest('tr').find('.coinsuranceInput').css('opacity', '');
            }else{
                $(this).closest('tr').find('.coinsuranceInput').css('opacity', 0.1);
                $(this).closest('tr').find('.copayInput').css('opacity', '');
            }
        });
    },
    history : function () {
        $('#history').on('click', function(e){
            //when implemented will work via url routing
            var target = $(e.target);
            if(target.is('a')){
                $('#sidebar2, #plan-options-links').show();
                $('section').hide();

                $('#'+target.data('sectionlink')).fadeIn();

                var asideWidth = $('aside')[0].scrollWidth;
                $('section').css({
                    'margin-left': asideWidth + 'px'
                });
                $('#sidebar2').find('li').removeClass('active');
                $('#'+target.data('sectionlink') + 'Link').addClass('active');
                $('#planOptionsLink').addClass('active');
            }
        });
    }
};


return View;


});