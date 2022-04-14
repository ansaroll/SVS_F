import { Component, OnInit } from '@angular/core';
import { trigger , state , style , transition , animate  } from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('navbarAnimation', [
      state('inactive' , style({
        // transform:'scale(1)'
        left : '-100%',
        // opacity : '0'
      })),
      state('active' , style({
        left : '0',
        opacity : '1'
        // transform:'scale(1.5)',
      })),
      transition('inactive <=> active', [
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  navbarState = 'inactive';
  isList!: number;
  isMenu: boolean = false;
  isSearch: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHide(){
    this.navbarState = this.navbarState === 'inactive' ? 'active' : 'inactive'
  }

}
