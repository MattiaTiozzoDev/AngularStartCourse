import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar-component',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() selectedPrice : number;

}
