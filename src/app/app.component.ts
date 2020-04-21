import {Component} from '@angular/core';

/** Normal component **/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 10
  title = 'debug-ng-effects';

  onClick() {
    this.id += 10
  }

  constructor() {}
}
