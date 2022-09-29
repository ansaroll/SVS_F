"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SublevelMenuComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var SublevelMenuComponent = /** @class */ (function () {
    function SublevelMenuComponent() {
        this.data = {
            routerLink: '',
            icon: '',
            label: '',
            items: []
        };
        this.collapsed = false;
        this.multiple = false;
    }
    SublevelMenuComponent.prototype.ngOnInit = function () {
        console.log('thisSub.expended', this.expended);
    };
    SublevelMenuComponent.prototype.handleClick = function (item) {
        console.log('thisSublevel.expended', this.expended);
        if (!this.multiple) {
            if (this.data.items && this.data.items.length > 0) {
                for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
                    var modelItem = _a[_i];
                    if (item !== modelItem && modelItem.expended) {
                        modelItem.expended = false;
                    }
                }
            }
        }
        item.expended = !item.expended;
    };
    __decorate([
        core_1.Input()
    ], SublevelMenuComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], SublevelMenuComponent.prototype, "collapsed");
    __decorate([
        core_1.Input()
    ], SublevelMenuComponent.prototype, "animating");
    __decorate([
        core_1.Input()
    ], SublevelMenuComponent.prototype, "expended");
    __decorate([
        core_1.Input()
    ], SublevelMenuComponent.prototype, "multiple");
    SublevelMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-sublevel-menu',
            templateUrl: './sublevel-menu-component.html',
            styleUrls: ['./sidenav.component.scss'],
            animations: [
                animations_1.trigger('submenu', [
                    animations_1.state('hidden', animations_1.style({
                        height: '0',
                        overflow: 'hidden'
                    })),
                    animations_1.state('visible', animations_1.style({
                        height: '*'
                    })),
                    animations_1.transition('visible <=> hidden', [
                        animations_1.animate('{{ transitionParams }}')
                    ]),
                    animations_1.transition('void => *', animations_1.animate(0))
                ]),
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
    ], SublevelMenuComponent);
    return SublevelMenuComponent;
}());
exports.SublevelMenuComponent = SublevelMenuComponent;
