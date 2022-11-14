"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_routing_module_1 = require("./admin-routing.module");
var header_component_1 = require("./components/header/header.component");
var sidenav_component_1 = require("./components/sidenav/sidenav.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var courses_component_1 = require("./components/courses/courses.component");
var calendar_component_1 = require("./components/body/calendar/calendar.component");
var chats_component_1 = require("./components/chats/chats.component");
var database_component_1 = require("./components/database/database.component");
var settings_component_1 = require("./components/settings/settings.component");
var screen_component_1 = require("./components/screen/screen.component");
var body_component_1 = require("./components/body/body.component");
var angular_calendar_1 = require("angular-calendar");
var date_fns_1 = require("angular-calendar/date-adapters/date-fns");
var list_doctorant_component_1 = require("./components/list-doctorant/list-doctorant.component");
var list_staff_component_1 = require("./components/list-staff/list-staff.component");
var list_prof_component_1 = require("./components/list-prof/list-prof.component");
var resume_component_1 = require("./components/resume/resume.component");
var forms_1 = require("@angular/forms");
var create_doctorant_component_1 = require("./components/create-doctorant/create-doctorant.component");
var create_formation_component_1 = require("./components/create-formation/create-formation.component");
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// https://www.tiny.cloud/docs/tinymce/6/angular-cloud/
// import { EditorModule } from '@tinymce/tinymce-angular';
var tinymce_angular_1 = require("@tinymce/tinymce-angular");
var create_news_component_1 = require("./components/create-news/create-news.component");
var sublevel_menu_component_1 = require("./components/sidenav/sublevel-menu.component");
var mini_profil_component_1 = require("./components/mini-profil/mini-profil.component");
var create_advert_component_1 = require("./components/create-advert/create-advert.component");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent,
                sidenav_component_1.SidenavComponent,
                sidenav_component_1.SidenavComponent,
                body_component_1.BodyComponent,
                dashboard_component_1.DashboardComponent,
                courses_component_1.CoursesComponent,
                calendar_component_1.CalendarComponent,
                chats_component_1.ChatsComponent,
                database_component_1.DatabaseComponent,
                settings_component_1.SettingsComponent,
                screen_component_1.ScreenComponent,
                list_doctorant_component_1.ListDoctorantComponent,
                list_staff_component_1.ListStaffComponent,
                list_prof_component_1.ListProfComponent,
                resume_component_1.ResumeComponent,
                create_doctorant_component_1.CreateDoctorantComponent,
                create_formation_component_1.CreateFormationComponent,
                create_news_component_1.CreateNewsComponent,
                sublevel_menu_component_1.SublevelMenuComponent,
                mini_profil_component_1.MiniProfilComponent,
                create_advert_component_1.CreateAdvertComponent
            ],
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                tinymce_angular_1.EditorModule,
                // NgbModalModule,
                // FlatpickrModule.forRoot(),
                angular_calendar_1.CalendarModule.forRoot({
                    provide: angular_calendar_1.DateAdapter,
                    useFactory: date_fns_1.adapterFactory
                }),
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            providers: [
                { provide: tinymce_angular_1.TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
