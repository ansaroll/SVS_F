"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navbarState = 'inactive';
        this.isMenu = false;
        this.isSearch = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.linckActive = 'home';
    };
    NavbarComponent.prototype.onClickLink = function (linkClicked) {
        this.linckActive = linkClicked;
        this.navbarState = this.navbarState === 'inactive' ? 'active' : 'inactive';
    };
    NavbarComponent.prototype.onHide = function () {
        this.navbarState = this.navbarState === 'inactive' ? 'active' : 'inactive';
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss'],
            animations: [
                animations_1.trigger('navbarAnimation', [
                    animations_1.state('inactive', animations_1.style({
                        // transform:'scale(1)'
                        left: '100%'
                    })),
                    animations_1.state('active', animations_1.style({
                        left: '0',
                        opacity: '1'
                        // transform:'scale(1.5)',
                    })),
                    animations_1.transition('inactive <=> active', [
                        animations_1.animate('1000ms ease-in-out')
                    ])
                ])
            ]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
