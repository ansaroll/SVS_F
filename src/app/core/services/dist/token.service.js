"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenService = void 0;
var core_1 = require("@angular/core");
var TokenService = /** @class */ (function () {
    function TokenService(userService) {
        var _this = this;
        this.userService = userService;
        this.user = {};
        this.saveToken = function (token) {
            localStorage.setItem('accessToken', token.accessToken);
            localStorage.setItem('refreshToken', token.refreshToken);
            localStorage.setItem('userIdConnected', token.userIdConneted);
            _this.userService.getSingleUser(token.userIdConneted).subscribe({
                next: function (user) {
                    localStorage.setItem('nameConnected', (user.firstName || "" + user.name) || 'Doctorant');
                }
            });
        };
        this.isLogged = function () {
            var accessToken = localStorage.getItem('accessToken');
            return !!accessToken;
        };
        this.clearToken = function () {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userIdConnected');
            window.location.reload();
        };
        this.getToken = function () {
            return localStorage.getItem('accessToken');
        };
        this.getUserIdConnected = function () {
            return localStorage.getItem('userIdConnected');
        };
        this.getUserNameConnected = function () {
            return localStorage.getItem('nameConnected');
        };
    }
    TokenService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TokenService);
    return TokenService;
}());
exports.TokenService = TokenService;
