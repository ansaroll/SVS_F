"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PublicRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_component_1 = require("./components/about/about.component");
var advert_details_component_1 = require("./components/advert-details/advert-details.component");
var advert_component_1 = require("./components/advert/advert.component");
var body_component_1 = require("./components/body/body.component");
// import { ContactComponent } from "./components/contact/contact.component";
var courses_component_1 = require("./components/courses/courses.component");
var home_component_1 = require("./components/home/home.component");
var routes = [
    {
        path: '', component: body_component_1.BodyComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'acceuil', component: home_component_1.HomeComponent },
            { path: 'about', component: about_component_1.AboutComponent },
            { path: 'courses', component: courses_component_1.CoursesComponent },
            { path: 'advert', component: advert_component_1.AdvertComponent },
            { path: 'advert-details/:id', component: advert_details_component_1.AdvertDetailsComponent },
        ]
    }
];
var PublicRoutingModule = /** @class */ (function () {
    function PublicRoutingModule() {
    }
    PublicRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PublicRoutingModule);
    return PublicRoutingModule;
}());
exports.PublicRoutingModule = PublicRoutingModule;
