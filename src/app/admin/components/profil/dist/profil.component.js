"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfilComponent = void 0;
var core_1 = require("@angular/core");
var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.userId = null;
        this.role = null;
        this.user = {};
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.paramMap.get('id');
        this.userService.getSingleUser(this.userId).subscribe({
            next: function (data) {
                _this.user = data;
            },
            error: function (error) { throw new Error(error); }
        });
        this.role = this.route.snapshot.paramMap.get('role');
    };
    ProfilComponent = __decorate([
        core_1.Component({
            selector: 'app-profil',
            templateUrl: './profil.component.html',
            styleUrls: ['./profil.component.scss']
        })
    ], ProfilComponent);
    return ProfilComponent;
}());
exports.ProfilComponent = ProfilComponent;
