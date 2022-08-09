import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
/* A property that is being passed in from the parent component. */
  @Input()
  deviceXs: boolean = false;
}
