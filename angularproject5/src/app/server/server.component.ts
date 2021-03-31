import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  // This version hardcode the variables to display in the html page
  //serverId : number = 10;
  //serverStatus : string = 'offline';
  serverId = 10;
  serverStatus = 'offline';

  // This is a defintion of a method (notice NO function keyword for an objct method)
  getServerStatus() {
    return this.serverStatus;
  }
}

