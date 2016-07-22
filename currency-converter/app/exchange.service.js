System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExchangeService;
    return {
        setters:[],
        execute: function() {
            ExchangeService = (function () {
                function ExchangeService() {
                    this.supportedCurrencies = ['EUR', 'GBP', 'USD'];
                    this.exchangeRates = {
                        "EUR/GBP": 0.8007,
                        "EUR/USD": 1.1397,
                        "GBP/EUR": 1.2478,
                        "GBP/USD": 1.4225,
                        "USD/EUR": 0.8778,
                        "USD/GBP": 0.7029
                    };
                }
                ExchangeService.prototype.getExchangeRate = function (baseCurrency, targetCurrency) {
                    return this.exchangeRates[baseCurrency + '/' + targetCurrency];
                };
                return ExchangeService;
            }());
            exports_1("ExchangeService", ExchangeService);
        }
    }
});
