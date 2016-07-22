System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuoteService, quotesDAO;
    return {
        setters:[],
        execute: function() {
            QuoteService = (function () {
                function QuoteService() {
                    this.quotes = quotesDAO;
                }
                QuoteService.prototype.getRandomQuote = function () {
                    var randomIndex = Math.floor(Math.random() * this.quotes.length);
                    return this.quotes[randomIndex];
                };
                QuoteService.prototype.generateRandomQuotes = function (count, delay, callback) {
                    this.generate(count, delay, callback);
                };
                QuoteService.prototype.generate = function (remainingCount, delay, callback) {
                    var _this = this;
                    callback(this.getRandomQuote());
                    if (remainingCount > 1) {
                        setTimeout(function () { return _this.generate(remainingCount - 1, delay, callback); }, delay);
                    }
                };
                return QuoteService;
            }());
            exports_1("QuoteService", QuoteService);
            quotesDAO = [
                {
                    "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
                    "author": "Brian W. Kernighan"
                },
                {
                    "line": "Walking on water and developing software from a specification are easy if both are frozen.",
                    "author": "Edward V Berard"
                },
                {
                    "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
                    "author": "Hofstadter's Law"
                },
                {
                    "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
                    "author": "Rick Osborne"
                },
                {
                    "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
                    "author": "Jan L. A. van de Snepscheut"
                },
                {
                    "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
                    "author": "Bill Gates"
                },
                {
                    "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
                    "author": "Leon Bambrick"
                },
                {
                    "line": "Nine people can't make a baby in a month.",
                    "author": "Fred Brooks"
                },
                {
                    "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
                    "author": "Edsger Dijkstra"
                },
                {
                    "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
                    "author": "Tom Cargill"
                }
            ];
        }
    }
});