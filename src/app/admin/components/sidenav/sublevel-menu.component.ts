import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu-component.html',
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
     ]),
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
    console.log('thisSub.expended' , this.expended);

  }

  handleClick(item:any):void {
    console.log('thisSublevel.expended', this.expended);
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
