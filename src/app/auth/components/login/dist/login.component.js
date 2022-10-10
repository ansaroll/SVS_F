"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, tokenService) {
        this.router = router;
        this.authService = authService;
        this.tokenService = tokenService;
        this.userLogin = {
            email: '',
            password: ''
        };
        this.unAuthorized = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.authService.login(this.userLogin)
            .subscribe({
            next: function (data) {
                _this.tokenService.saveToken(data);
                if (data.role == 'admin') {
                    _this.router.navigateByUrl('/admin');
                }
                // if(data.role == 'prof'){
                //   this.router.navigateByUrl('/prof')
                // }
                if (data.role == 'doctorant') {
                    _this.router.navigateByUrl('/doctorant');
                }
            },
            error: function (err) {
                _this.unAuthorized = true;
            }
        });
        // this.router.navigateByUrl('/admin')
        // or
        // this.router.navigateByUrl('/ent/doctorants')
        // or
        // this.router.navigateByUrl('/ent/prof')
    };
    __decorate([
        core_1.Input()
    ], LoginComponent.prototype, "userLogin");
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
