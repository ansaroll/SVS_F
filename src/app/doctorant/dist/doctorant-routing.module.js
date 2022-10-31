"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DoctorantRoutingModule = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var profil_component_1 = require("./components/profil/profil.component");
var screen_component_1 = require("./components/screen/screen.component");
var calendar_component_1 = require("./components/calendar/calendar.component");
var chats_component_1 = require("./components/chats/chats.component");
var courses_component_1 = require("./components/courses/courses.component");
var settings_component_1 = require("./components/settings/settings.component");
var routes = [
    {
        path: '', component: screen_component_1.ScreenComponent,
        children: [
            { path: '', component: profil_component_1.ProfilComponent },
            { path: 'profil', component: profil_component_1.ProfilComponent },
            { path: 'calendar', component: calendar_component_1.CalendarComponent },
            { path: 'chats', component: chats_component_1.ChatsComponent },
            { path: 'courses', component: courses_component_1.CoursesComponent },
            { path: 'settings/:id', component: settings_component_1.SettingsComponent }
        ]
    }
];
var DoctorantRoutingModule = /** @class */ (function () {
    function DoctorantRoutingModule() {
    }
    DoctorantRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DoctorantRoutingModule);
    return DoctorantRoutingModule;
}());
exports.DoctorantRoutingModule = DoctorantRoutingModule;
