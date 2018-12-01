import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Pipe';

  toDate: Date =new Date();

  msg : string = 'Welcome to Angular pipes';

  num : number = 9256.3241;
}
