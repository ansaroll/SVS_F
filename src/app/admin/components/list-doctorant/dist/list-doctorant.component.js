"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListDoctorantComponent = void 0;
var core_1 = require("@angular/core");
var ListDoctorantComponent = /** @class */ (function () {
    function ListDoctorantComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.users = [];
        this.currentUser = {};
        this.onViewUser = function (user) {
            _this.currentUser = user;
        };
        this.userDeletedHandler = function () {
            _this.fetch();
        };
        this.fetch = function () {
            _this.userService.getUsers({ role: 'doctorant' }).subscribe({ next: function (data) {
                    _this.users = data;
                    _this.currentUser = data[0];
                }, error: function (err) { return console.log({ err: err }); } });
        };
    }
    ListDoctorantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers({ role: 'doctorant' }).subscribe({ next: function (data) {
                _this.users = data;
                _this.currentUser = data[0];
            }, error: function (err) { return console.log({ err: err }); } });
    };
    ListDoctorantComponent = __decorate([
        core_1.Component({
            selector: 'app-list-doctorant',
            templateUrl: './list-doctorant.component.html',
            styleUrls: ['./list-doctorant.component.scss']
        })
    ], ListDoctorantComponent);
    return ListDoctorantComponent;
}());
exports.ListDoctorantComponent = ListDoctorantComponent;
