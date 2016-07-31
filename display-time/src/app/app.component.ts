import { Component } from '@angular/core';
import { ClockComponent } from './clock/clock.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
