'use strict';

(function (app) {
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;

  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<em>{{quote.line}}</em> - {{quote.author}}'
  }).Class({
    constructor: [QuoteService, function RandomQuoteComponent(quoteService) {
      var _this = this;

      quoteService.generateRandomQuotes(3, 2000, function (quote) {
        return _this.quote = quote;
      });
    }]
  });
})(window.app || (window.app = {}));