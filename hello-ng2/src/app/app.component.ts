import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [
  		NavbarComponent, JumbotronComponent
  		],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  
}
