import { Component } from "@angular/core";

//meed to pass object to config it.  The name is what you will use when placing in other components html file
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = "offline"

    getServerStatus(){
        return this.serverStatus;
    }

}