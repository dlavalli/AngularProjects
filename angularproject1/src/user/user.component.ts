import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../app/dummy-users';

// Only calculated once when this file gets parsed (ie const) - can be moved to component class
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // All properties defined here are available in the template above

  // Version since Angular 2 without signal
  // selectedUser = DUMMY_USERS[this.randomizeIndex()];

  // Signal Version since Angular 16
  // Initializing the signal here
  selectedUser = signal(DUMMY_USERS[this.randomizeIndex()]);

  // Signal version since Angular 16
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // For angular 2 when not using signals
  // Define a getter that can be used in the template. Cannot take argument
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // get randomizeIndex() {...}  also possible but then so not put()
  // randomizeIndex() {...}  also possible but then need to put() and also available in markup
  private randomizeIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  // Define a normal method that returns nothing.  ie:  not leading:  get
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // Angular 2 method of updating the value
    // this.selectedUser = DUMMY_USERS[this.randomizeIndex()];

    // Angular 16 + signal method of updating a signal
    this.selectedUser.set(DUMMY_USERS[this.randomizeIndex()]);
  }
}
