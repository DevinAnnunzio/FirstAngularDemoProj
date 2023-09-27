import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  //can define the styles inside here as below using inline
  styles:[`
  h3{
    color: red;
  }
  
  `]
})
export class AppComponent {
}
