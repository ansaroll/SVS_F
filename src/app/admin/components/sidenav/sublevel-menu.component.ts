import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  template: `
   <ul *ngIf="collapsed && data.items && data.items.length > 0"
    [@submenu]="expended ? {value:'visible' , params:{transitionParams:'1000ms ease-in-out' , height:'*'}}
                         : {value: 'hidden',
                            params:{transitionParams:'1000ms ease-in-out' , height:'0'}}"
    class="sublevel-nav"
   >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a class="sublevel-nav-link"
          (click)="handleClick(item)"
          *ngIf="item.items && item.items.length > 0"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{ item.label }}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapsed-icon"
             [ngClass]="!item.expended ? 'fa fa-angle-right' : 'fa fa-angle-down'"
          ></i>
        </a>
        <a class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="[item.routerLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact: true}"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{ item.label }}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expended]="item.expended"
          ></app-sublevel-menu>
        </div>
      </li>

   </ul>
  `,
   styleUrls: ['./sidenav.component.scss'],
   animations:[
     trigger('submenu', [
        state('hidden', style({
          height:'0',
          overflow:'hidden'
        })),
        state('visible', style({
          height:'*',
        })),
        transition('visible <=> hidden' ,
        [
          animate('{{ transitionParams }}')
        ]),
        transition('void => *' , animate(0))
     ])
    ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routerLink:'',
    icon:'',
    label:'',
    items:[]
  }

  @Input() collapsed = false
  @Input() animating:boolean | undefined;
  @Input() expended:boolean | undefined;
  @Input() multiple:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(item:any):void {
    if(!this.multiple){
      if(this.data.items && this.data.items.length > 0) {
        for(let modelItem of this.data.items) {
          if(item !== modelItem && modelItem.expended){
            modelItem.expended = false
          }
        }
      }
    }
    item.expended = !item.expended
  }
}
