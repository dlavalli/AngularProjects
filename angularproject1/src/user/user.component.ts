import { Component, computed, input } from '@angular/core';
// import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // without using input() function (ie signal)
  // @Input({required: true}) avatar !: String;
  // @Input({required: true}) name !: String;

  // get imagePath() {
  //  return 'assets/users/' + this.avatar;
  // }


  // Using the (internally) RO input ie: avatar used as a signal
  avatar = input<string>('');

  // Using the (internally )RO input ie: name used as a signal
  // Can alternatively indicate it is required
  // name = input<string>('');
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {}
}
