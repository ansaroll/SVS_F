"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResumeComponent = void 0;
var core_1 = require("@angular/core");
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(route, userService, router, location) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.location = location;
        this.user = {};
        this.userDeleted = new core_1.EventEmitter();
        this.openDialogConfirm = false;
        this.userToDelete = undefined;
        this.id = null;
        this.deleteUser = function () {
            _this.openDialogConfirm = false;
            _this.userService.deleteUser(_this.userToDelete).subscribe({
                next: function () { return _this.userDeleted.emit(); },
                error: function (err) { return console.log({ err: err }); }
            });
        };
        this.cancelDelete = function () {
            _this.openDialogConfirm = false;
            _this.userToDelete = undefined;
        };
        this.onViewDetailUser = function (idUser, role) {
            _this.router.navigateByUrl("/admin/profil/" + idUser + "/" + role);
        };
        this.onViewDeleteUser = function (idUser) {
            _this.openDialogConfirm = true;
            _this.userToDelete = idUser;
        };
        this.ngOnDestroy = function () {
            // this.fetch(this.route.snapshot.paramMap.get('id'))
        };
    }
    ResumeComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], ResumeComponent.prototype, "user");
    __decorate([
        core_1.Output()
    ], ResumeComponent.prototype, "userDeleted");
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'app-resume',
            templateUrl: './resume.component.html',
            styleUrls: ['./resume.component.scss']
        })
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
