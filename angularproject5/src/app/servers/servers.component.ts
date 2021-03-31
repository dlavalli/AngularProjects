import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',

  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Server Name is ${this.serverName}`;
  }
  onUpdateServerName(event: Event) {
    // event.data is the text as it is typed
    // event is the entire event object

    // If passing type event : any
    // console.log(event.target.value);

    // If passing type event : Event (need type cast)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
