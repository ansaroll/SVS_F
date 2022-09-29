import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Output , EventEmitter, OnInit, HostListener} from '@angular/core';
import { INavbarData } from './helper';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('1000ms ease-in-out',
          style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('1000ms ease-in-out',
          style({opacity:0})
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{


  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple:boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed : this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(){
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed : this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed : this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item:INavbarData):void {
    if(!this.multiple){
        for(let modelItem of this.navData) {
          if(item !== modelItem && modelItem.expended){
            modelItem.expended = false
          }
      }
    }
    item.expended = !item.expended
  }
}
