import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls: ['jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;

  constructor() {
  	this.jbtHeading = 'Hello, world!';
  	this.jbtText = 'place holder text';
  	this.jbtBtnText = 'Learn more';
  	this.jbtBtnUrl = '#';
  }

  ngOnInit() {
  }

}
