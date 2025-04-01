import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "../user/user.component";
import { TasksComponent } from "../tasks/tasks.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, HeaderComponent],
  imports: [HeaderComponent, UserComponent, TasksComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    // NOTE : use of trailing ! on find()! indicate we are certain there will be a value found
    //        better to handle the possible problem
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id : string) {
    this.selectedUserId = id;
  }
}
