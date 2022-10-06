"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PublicModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var landing_page_component_1 = require("./components/landing-page/landing-page.component");
var public_routing_module_1 = require("./public-routing.module");
var navbar_component_1 = require("./components/navbar/navbar.component");
var courses_component_1 = require("./components/courses/courses.component");
// import { ContactComponent } from './components/contact/contact.component';
var about_component_1 = require("./components/about/about.component");
var home_component_1 = require("./components/home/home.component");
var body_component_1 = require("./components/body/body.component");
var footer_component_1 = require("./components/footer/footer.component");
var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        core_1.NgModule({
            declarations: [
                landing_page_component_1.LandingPageComponent,
                navbar_component_1.NavbarComponent,
                courses_component_1.CoursesComponent,
                // ContactComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent,
                body_component_1.BodyComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                common_1.CommonModule,
                public_routing_module_1.PublicRoutingModule,
            ],
            exports: [navbar_component_1.NavbarComponent]
        })
    ], PublicModule);
    return PublicModule;
}());
exports.PublicModule = PublicModule;
