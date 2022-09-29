"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidenavComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var nav_data_1 = require("./nav-data");
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.onToggleSidenav = new core_1.EventEmitter();
        this.collapsed = false;
        this.screenWidth = 0;
        this.navData = nav_data_1.navbarData;
        this.multiple = false;
    }
    SidenavComponent.prototype.onResize = function (event) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = false;
            this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
        }
    };
    SidenavComponent.prototype.ngOnInit = function () {
        this.screenWidth = window.innerWidth;
    };
    SidenavComponent.prototype.toggleCollapse = function () {
        this.collapsed = !this.collapsed;
        this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    };
    SidenavComponent.prototype.closeSidenav = function () {
        this.collapsed = false;
        this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    };
    SidenavComponent.prototype.handleClick = function (item) {
        if (!this.multiple) {
            for (var _i = 0, _a = this.navData; _i < _a.length; _i++) {
                var modelItem = _a[_i];
                if (item !== modelItem && modelItem.expended) {
                    modelItem.expended = false;
                }
            }
        }
        item.expended = !item.expended;
    };
    __decorate([
        core_1.Output()
    ], SidenavComponent.prototype, "onToggleSidenav");
    __decorate([
        core_1.HostListener('window:resize', ['$event'])
    ], SidenavComponent.prototype, "onResize");
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            templateUrl: './sidenav.component.html',
            styleUrls: ['./sidenav.component.scss'],
            animations: [
                animations_1.trigger('fadeInOut', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0 }),
                        animations_1.animate('1000ms ease-in-out', animations_1.style({ opacity: 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ opacity: 1 }),
                        animations_1.animate('1000ms ease-in-out', animations_1.style({ opacity: 0 }))
                    ])
                ])
            ]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;
