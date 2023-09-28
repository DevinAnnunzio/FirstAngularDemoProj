import { Component } from '@angular/core';

@Component({
  //SELECTING BY ID DOES NOT WORK IN ANGULAR
  selector: 'app-servers',
  //can use a selector as show below
  // selector: '[app-servers]',  
  //can also use by class
    //  selector: '.app-servers',
  
  templateUrl: './servers.component.html',
  //Defining html code in file using the template below.  
  //To add multi line do the template at bottom using back ticks to use js template expressions
  // template: '<app-server></app-server><app-server></app-server>',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = "TestServer"

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! The name is: ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value
  }
}
