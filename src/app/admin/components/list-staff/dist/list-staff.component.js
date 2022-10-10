"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListStaffComponent = void 0;
var core_1 = require("@angular/core");
var ListStaffComponent = /** @class */ (function () {
    function ListStaffComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.users = [];
        this.currentUser = {};
        this.onViewUser = function (user) {
            _this.currentUser = user;
        };
    }
    ListStaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers({ role: 'admin' }).subscribe({
            next: function (data) {
                _this.users = data;
                _this.currentUser = data[0];
            }, error: function (err) { return console.log({ err: err }); }
        });
    };
    ListStaffComponent = __decorate([
        core_1.Component({
            selector: 'app-list-staff',
            templateUrl: './list-staff.component.html',
            styleUrls: ['./list-staff.component.scss']
        })
    ], ListStaffComponent);
    return ListStaffComponent;
}());
exports.ListStaffComponent = ListStaffComponent;
