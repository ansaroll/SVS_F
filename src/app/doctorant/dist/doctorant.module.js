"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DoctorantModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var doctorant_routing_module_1 = require("./doctorant-routing.module");
var profil_component_1 = require("./components/profil/profil.component");
var sidenav_component_1 = require("./components/sidenav/sidenav.component");
var settings_component_1 = require("./components/settings/settings.component");
var chats_component_1 = require("./components/chats/chats.component");
var calendar_component_1 = require("./components/calendar/calendar.component");
var courses_component_1 = require("./components/courses/courses.component");
var screen_component_1 = require("./components/screen/screen.component");
var forms_1 = require("@angular/forms");
var body_component_1 = require("./components/body/body.component");
var mini_profil_component_1 = require("./components/mini-profil/mini-profil.component");
var DoctorantModule = /** @class */ (function () {
    function DoctorantModule() {
    }
    DoctorantModule = __decorate([
        core_1.NgModule({
            declarations: [
                profil_component_1.ProfilComponent,
                sidenav_component_1.SidenavComponent,
                settings_component_1.SettingsComponent,
                chats_component_1.ChatsComponent,
                calendar_component_1.CalendarComponent,
                courses_component_1.CoursesComponent,
                screen_component_1.ScreenComponent,
                body_component_1.BodyComponent,
                mini_profil_component_1.MiniProfilComponent
            ],
            imports: [
                common_1.CommonModule,
                doctorant_routing_module_1.DoctorantRoutingModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ]
        })
    ], DoctorantModule);
    return DoctorantModule;
}());
exports.DoctorantModule = DoctorantModule;
