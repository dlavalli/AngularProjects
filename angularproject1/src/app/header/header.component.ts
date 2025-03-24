import { Component } from "@angular/core";

/*
  A component of type Header
  Convention is to have 2 parts in selector name to avoid clash. In this case app could be anything else
  Allowed but not recommended: template: '<h1>Hello</h1>'
  In some angular versions 19 + , standalone could be defaulted to true , also valid for 18. Indicates to use modern angular components.
      Setting  it to false, you would get module based components instead. Today standalone components are easier to use and tie together
  Allowed but not recommended:  styles: ['h1 {color: red}']
*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
  // styleUrls: ['./header.component.css', './header1.component.css']
})
export class HeaderComponent {}
