 import { INavbarData } from "./helper";

export const navbarData:INavbarData[] = [
  {
    routerLink : 'dashboard',
    icon : 'fa-solid fa-house-laptop',
    label : 'Tableau de Bord'
  },
  {
    routerLink : 'calendar',
    icon : 'fa-solid fa-calendar-days',
    label : 'Calendrier'
  },
  {
    routerLink : 'chats',
    icon : 'fa-brands fa-rocketchat',
    label : 'Messages'
  },
  {
    routerLink : 'courses',
    icon : 'fa-solid fa-graduation-cap',
    label : 'Formations'
  },
  {
    routerLink : 'database',
    icon : 'fa-solid fa-database',
    label : 'Base de donnees',
    items:[
      {
        routerLink : 'database/doctorants',
        label : 'Doctorants',
        // items:[
        //   {
        //     routerLink : 'database/doctorants',
        //     label : 'Doctorants'
        //   },
        //   {
        //     routerLink : 'database/staffs',
        //     label : 'Staffs'
        //   },
        //   {
        //     routerLink : 'database/profs',
        //     label : 'Profs'
        //   },
        // ]
      },
      {
        routerLink : 'database/staffs',
        label : 'Staffs'
      },
      {
        routerLink : 'database/profs',
        label : 'Profs'
      },
    ]
  },
  {
    routerLink : 'settings',
    icon : 'fa-solid fa-gears',
    label : 'Paramettres'
  },
]
