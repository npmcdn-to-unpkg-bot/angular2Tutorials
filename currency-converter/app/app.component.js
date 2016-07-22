System.register(['@angular/core', './exchange.service', './currency-select.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, exchange_service_1, currency_select_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exchange_service_1_1) {
                exchange_service_1 = exchange_service_1_1;
            },
            function (currency_select_component_1_1) {
                currency_select_component_1 = currency_select_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(exchangeService) {
                    this.exchangeService = exchangeService;
                    this.baseCurrency = 'USD';
                    this.targetCurrency = 'GBP';
                    this.baseAmount = 1;
                }
                Object.defineProperty(AppComponent.prototype, "targetAmount", {
                    get: function () {
                        var exchangeRate = this.exchangeService
                            .getExchangeRate(this.baseCurrency, this.targetCurrency);
                        return (this.baseAmount * exchangeRate).toFixed(2);
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.isValid = function (v) {
                    return Number.isFinite(v);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'currency-converter',
                        providers: [exchange_service_1.ExchangeService],
                        directives: [currency_select_component_1.CurrencySelectComponent],
                        template: "<input type=\"number\" [(ngModel)]=\"baseAmount\"\n  \t[ngClass]=\"{error: false}\">{{baseCurrency}} \n  \t<currency-select [selected]=\"baseCurrency\"></currency-select>\n  \t\t= <strong>{{targetAmount}}</strong>\n\t<currency-select [selected]=\"targetCurrency\"></currency-select>\n\t",
                        styles: [
                            "input[type=number]{\n  \twidth: 10ex; \n  \ttext-align: right;\n  }\n  .error{\n  \tbackground-color: #ff6666;\n  }\n  "]
                    }), 
                    __metadata('design:paramtypes', [exchange_service_1.ExchangeService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
