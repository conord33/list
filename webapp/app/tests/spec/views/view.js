define(["app/view"], function (View) {

    return function (){
    describe("View::", function () {

            beforeEach(function(){
                jQuery('<div/>', {
                    id: 'appContainer',
                }).appendTo('#sandbox');

                var view = new View();
            });

            afterEach(function(){
                $('#sandbox').empty();
            });


            describe("Dependencies", function() {
                it('should be loaded and defined', function(){
                    expect($).toBeDefined();
                    expect(_).toBeDefined();
                    expect(Backbone).toBeDefined();
                });
            });





            describe("History widget", function(){
                it('should not display on load', function () {
                    expect($('#history').is(':visible')).toBeFalsy();
                });



                it('should become visible on click of search result table tr td', function () {
                    $('#searchResultTable tr td').trigger('click');
                    expect($('#history').is(':visible')).toBeTruthy();
                });

            });


        });
    }();
});


            // describe("Find Plan Search ", function(){
            //     it('should be visible', function () {
            //         expect($('#findPlanSearch:visible')).toBeDefined();
            //     });
            // });