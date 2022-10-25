 import { INavbarData } from "./helper";

export const navbarData:INavbarData[] = [
  {
    routerLink : 'dashboard',
    icon : 'fa-solid fa-house-laptop',
    label : 'Tableau de Bord'
  },
  // {
  //   routerLink : 'calendar',
  //   icon : 'fa-solid fa-calendar-days',
  //   label : 'Calendrier'
  // },
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
    label : 'Base de donnees'
  },
  {
    routerLink : '',
    icon : 'fa-solid fa-add',
    label : 'Création',
    items:[
      {
        routerLink : 'create-user',
        label : 'Utilisateur',
      },
      {
        routerLink : 'create-formation',
        label : 'Formation'
      }
    ]
  },
  {
    routerLink : '/auth/logout',
    icon : 'fa-solid fa-arrow-right-from-bracket',
    label : 'Deconnexion'
  },
]
