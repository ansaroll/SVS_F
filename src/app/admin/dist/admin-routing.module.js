"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var calendar_component_1 = require("./components/body/calendar/calendar.component");
var chats_component_1 = require("./components/chats/chats.component");
var courses_component_1 = require("./components/courses/courses.component");
var create_doctorant_component_1 = require("./components/create-doctorant/create-doctorant.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var create_formation_component_1 = require("./components/create-formation/create-formation.component");
var database_component_1 = require("./components/database/database.component");
var list_doctorant_component_1 = require("./components/list-doctorant/list-doctorant.component");
var list_prof_component_1 = require("./components/list-prof/list-prof.component");
var list_staff_component_1 = require("./components/list-staff/list-staff.component");
var resume_component_1 = require("./components/resume/resume.component");
var screen_component_1 = require("./components/screen/screen.component");
var settings_component_1 = require("./components/settings/settings.component");
var create_news_component_1 = require("./components/create-news/create-news.component");
var profil_component_1 = require("./components/profil/profil.component");
var create_advert_component_1 = require("./components/create-advert/create-advert.component");
var routes = [
    {
        path: '', component: screen_component_1.ScreenComponent,
        // path : ''   , redirectTo :'' , pathMatch : 'full' ,
        children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'calendar', component: calendar_component_1.CalendarComponent },
            { path: 'chats', component: chats_component_1.ChatsComponent },
            { path: 'profil/:id/:role', component: profil_component_1.ProfilComponent },
            { path: 'database', component: database_component_1.DatabaseComponent,
                children: [
                    { path: '', component: list_doctorant_component_1.ListDoctorantComponent },
                    { path: 'doctorants', component: list_doctorant_component_1.ListDoctorantComponent,
                        children: [
                            { path: 'profil/:id', component: resume_component_1.ResumeComponent }
                        ]
                    },
                    { path: 'profs', component: list_prof_component_1.ListProfComponent,
                        children: [{ path: 'profil/:id', component: resume_component_1.ResumeComponent }] },
                    { path: 'staffs', component: list_staff_component_1.ListStaffComponent,
                        children: [{ path: 'profil/:id', component: resume_component_1.ResumeComponent }] },
                ]
            },
            { path: 'settings', component: settings_component_1.SettingsComponent },
            { path: 'courses', component: courses_component_1.CoursesComponent },
            { path: 'create-user', component: create_doctorant_component_1.CreateDoctorantComponent },
            { path: 'create-user/:id/:role', component: create_doctorant_component_1.CreateDoctorantComponent },
            { path: 'create-formation', component: create_formation_component_1.CreateFormationComponent },
            { path: 'create-advert', component: create_advert_component_1.CreateAdvertComponent },
            { path: 'create-advert/:id', component: create_advert_component_1.CreateAdvertComponent },
            { path: 'create-formation/:id', component: create_formation_component_1.CreateFormationComponent },
            { path: 'createnews', component: create_news_component_1.CreateNewsComponent },
        ]
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
