"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdvertComponent = void 0;
var core_1 = require("@angular/core");
var AdvertComponent = /** @class */ (function () {
    function AdvertComponent(advertService) {
        this.advertService = advertService;
        this.advert = [];
        this.idToDelete = '';
        this.showModal = false;
    }
    AdvertComponent.prototype.ngOnInit = function () {
        this.getAllAdvert();
    };
    AdvertComponent.prototype.setDeleteCourse = function (id) {
        this.idToDelete = id;
        this.showModal = true;
    };
    AdvertComponent.prototype.onCancelDelete = function () {
        this.showModal = false;
        this.idToDelete = undefined;
    };
    AdvertComponent.prototype.getAllAdvert = function () {
        var _this = this;
        this.advertService.getAdverts({}).subscribe({
            next: function (data) {
                _this.advert = data;
            },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    AdvertComponent.prototype.onDeleteCourse = function () {
        var _this = this;
        this.advertService.deleteAdvert(this.idToDelete).subscribe({
            next: function (data) {
                console.log({ data: data });
                _this.showModal = false;
                _this.idToDelete = undefined;
                _this.getAllAdvert();
            },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    AdvertComponent = __decorate([
        core_1.Component({
            selector: 'app-advert',
            templateUrl: './advert.component.html',
            styleUrls: ['./advert.component.scss']
        })
    ], AdvertComponent);
    return AdvertComponent;
}());
exports.AdvertComponent = AdvertComponent;
