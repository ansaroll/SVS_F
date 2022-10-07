"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfilComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(route, userService, router, http) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.userId = null;
        this.role = null;
        this.percentDone = 0;
        this.uploadSuccess = false;
        this.isImageSaved = false;
        this.cardImageBase64 = "./assets/profils/rolland.jpg";
        this.user = {};
        this.fileName = '';
        this.httpHeader = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'multipart/form-data'
            })
        };
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.paramMap.get('id');
        this.userService.getSingleUser(this.userId).subscribe({
            next: function (data) {
                _this.user = data,
                    _this.cardImageBase64 = data.pictureUrl;
            },
            error: function (error) { throw new Error(error); }
        });
        this.role = this.route.snapshot.paramMap.get('role');
    };
    ProfilComponent.prototype.uploadImage = function (e) {
        this.CreateBase64String(e);
    };
    ProfilComponent.prototype.CreateBase64String = function (fileInput) {
        var _this = this;
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function (rs) {
                    var imgBase64Path = e.target.result;
                    _this.cardImageBase64 = imgBase64Path;
                    _this.isImageSaved = true;
                    _this.userService.addPdpUser({
                        userId: _this.userId,
                        file: imgBase64Path
                    }).subscribe({
                        next: function (data) { console.log({ data: data }); },
                        error: function (error) { throw new Error(error); }
                    });
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
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
