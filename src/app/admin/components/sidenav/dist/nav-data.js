"use strict";
exports.__esModule = true;
exports.navbarData = void 0;
exports.navbarData = [
    {
        routerLink: 'dashboard',
        icon: 'fa-solid fa-house-laptop',
        label: 'Tableau de Bord'
    },
    {
        routerLink: 'calendar',
        icon: 'fa-solid fa-calendar-days',
        label: 'Calendrier'
    },
    {
        routerLink: 'chats',
        icon: 'fa-brands fa-rocketchat',
        label: 'Messages'
    },
    {
        routerLink: 'courses',
        icon: 'fa-solid fa-graduation-cap',
        label: 'Formations'
    },
    {
        routerLink: 'database',
        icon: 'fa-solid fa-database',
        label: 'Base de donnees',
        items: [
            {
                routerLink: 'database/doctorants',
                label: 'Doctorants'
            },
            {
                routerLink: 'database/staffs',
                label: 'Staffs'
            },
            {
                routerLink: 'database/profs',
                label: 'Profs'
            },
        ]
    },
    // {
    //   routerLink : 'settings',
    //   icon : 'fa-solid fa-gears',
    //   label : 'Paramettres'
    // },
    {
        routerLink: '/auth/logout',
        icon: 'fa-solid fa-arrow-right-from-bracket',
        label: 'Deconnexion'
    },
];