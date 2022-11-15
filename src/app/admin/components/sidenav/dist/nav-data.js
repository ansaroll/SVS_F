"use strict";
exports.__esModule = true;
exports.navbarData = void 0;
exports.navbarData = [
    {
        routerLink: 'dashboard',
        icon: 'fa-solid fa-house-laptop',
        label: 'Tableau de Bord'
    },
    // {
    //   routerLink : 'calendar',
    //   icon : 'fa-solid fa-calendar-days',
    //   label : 'Calendrier'
    // },
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
        routerLink: 'advert',
        icon: 'fa-solid fa-scroll',
        label: 'Annonces'
    },
    {
        routerLink: 'database',
        icon: 'fa-solid fa-database',
        label: 'Base de donnees'
    },
    {
        routerLink: '',
        icon: 'fa-solid fa-add',
        label: 'Création',
        items: [
            {
                routerLink: 'create-user',
                label: 'Utilisateur'
            },
            {
                routerLink: 'create-formation',
                label: 'Formation'
            },
            {
                routerLink: 'create-advert',
                label: 'Annonce'
            }
        ]
    },
    {
        routerLink: '/auth/logout',
        icon: 'fa-solid fa-arrow-right-from-bracket',
        label: 'Deconnexion'
    },
];
