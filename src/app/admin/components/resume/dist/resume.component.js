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
    function ResumeComponent(route, userService, location) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.location = location;
        this.user = {};
        this.id = null;
        this.fetch = function (id) {
            _this.userService.getSingleUser(id).subscribe({
                next: function (data) { return _this.user = data; },
                error: function (err) { return console.log({ err: err }); }
            });
        };
        this.ngOnDestroy = function () {
            _this.fetch(_this.route.snapshot.paramMap.get('id'));
        };
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetch(this.route.snapshot.paramMap.get('id'));
        this.location.onUrlChange(function () {
            // this.id = this.route.snapshot.paramMap.get('id')
            _this.fetch(_this.route.snapshot.paramMap.get('id'));
            console.log('id', _this.route.snapshot.paramMap.get('id'));
        });
    };
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
