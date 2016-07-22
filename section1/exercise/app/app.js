(function() {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var bootstrap = ng.platformBrowserDynamic.bootstrap;

  var TimeService = Class({
    constructor: function TimeService(){
      this.timeStamp = new Date();
    },
    getCurrentTime: function(){
      var currentTime = new Date();
       // hour = currentDate.getHours();
       // min  = currentDate.getMinutes();
       // sec  = currentDate.getSeconds();
       return currentTime;
    },
    generateClock: function(delay, callback){
      var self = this;
      function generate() {
        callback(self.getCurrentTime());
        setTimeout(function(){
          generate();
      }, delay); 
      }
    }
  });


  var TimeComponent = Component({
    selector: 'date-time',
    template: '<p>{{curr}}</p>'
  }).Class({
    constructor: [TimeService, function TimeComponent(timeService) {
      var self = this;
      timeService.generateClock(1000, function(date){
          self.curr = new Date();
      });
       
    }]
  });

  var AppComponent = Component({

      // name of the custom HTML custom tah to display this component
      selector: 'time-app',

      //the list of components used by this component
      directives: [TimeComponent],

      providers: [TimeService],

      //a little HTML used to display this component
      template: '<h3>current datetime</h3>' +
                '<p><date-time></date-time></p>'
  })
  .Class({
    constructor: function AppComponent(){
      //empty
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(AppComponent);
  });

})();
