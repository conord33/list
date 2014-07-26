require.config({
  baseUrl: '../../js/lib/',
  urlArgs: 'cb=' + Math.random(), //cache buster, keeps browser from caching info
  paths: {
    'app': '../app',                //used as shortcut to navigate to app files
    'template': '../../template',   //used as shortcut to navigate to template files

    'jquery': 'jquery.min',
    'jquery-ui': 'jquery-ui.min',
    'bootstrap': 'bootstrap.min',

    'typeahead': 'typeahead.min',
    'jquerySlide': 'jquery-slideExtend',

    'underscore': 'underscore.min',
    'backbone': 'backbone-min',
    'handlebars': 'handlebars',

    'modernizr': 'modernizr.min',


    jasmine: '../../tests/lib/jasmine',
    'jasmine-html': '../../tests/lib/jasmine-html',
    spec: '../../tests/spec/'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});




require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/views/view');
  // specs.push('spec/models/TodoSpec');
  // specs.push('spec/views/ClearCompletedSpec');
  // specs.push('spec/views/CountViewSpec');
  // specs.push('spec/views/FooterViewSpec');
  // specs.push('spec/views/MarkAllSpec');
  // specs.push('spec/views/NewTaskSpec');
  // specs.push('spec/views/TaskListSpec');
  // specs.push('spec/views/task/TaskViewSpec');
  // specs.push('spec/views/task/ViewTaskViewSpec');
  // specs.push('spec/views/task/EditTaskViewSpec');


  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});