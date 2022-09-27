"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// les modules
var core_module_1 = require("./core/core.module");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var animations_2 = require("@angular/platform-browser/animations");
var token_interceptor_1 = require("./_helpers/token.interceptor");
var common_1 = require("@angular/common");
var fr = require("@angular/common/locales/fr");
var AppModule = /** @class */ (function () {
    function AppModule() {
        common_1.registerLocaleData(fr["default"]);
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                animations_2.NoopAnimationsModule
            ],
            providers: [
                token_interceptor_1.TokenInterceptorProvider,
                { provide: core_1.LOCALE_ID, useValue: 'fr-FR' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
