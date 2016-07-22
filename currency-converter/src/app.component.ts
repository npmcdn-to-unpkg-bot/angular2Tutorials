import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';
import { CurrencySelectComponent } from './currency-select.component';

@Component({
  selector: 'currency-converter',
  providers: [ExchangeService],
	directives: [CurrencySelectComponent],
  template: `<input type="number" [(ngModel)]="baseAmount"
  	[ngClass]="{error: false}">{{baseCurrency}} 
  	<currency-select [selected]="baseCurrency"></currency-select>
  		= <strong>{{targetAmount}}</strong>
	<currency-select [selected]="targetCurrency"></currency-select>
	`,
  styles: [
  	`input[type=number]{
  	width: 10ex; 
  	text-align: right;
  }
  .error{
  	background-color: #ff6666;
  }
  `]
})

export class AppComponent {

	baseCurrency = 'USD';
	targetCurrency = 'GBP';
	baseAmount = 1;

	constructor(private exchangeService: ExchangeService){}

	get targetAmount(){
		const exchangeRate = this.exchangeService
			.getExchangeRate(this.baseCurrency, this.targetCurrency);

		return (this.baseAmount * exchangeRate).toFixed(2);
	}

	isValid(v: number){
		return Number.isFinite(v);
	}
}
