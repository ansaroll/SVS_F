"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(statsService) {
        this.statsService = statsService;
        this.stats = {
            coursesCount: 0,
            doctorantCount: 0,
            profCount: 0,
            staffCount: 0
        };
        this.statsMessages = {
            fileCount: 0,
            doctorantMessages: 0,
            adminMessages: 0
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statsService.getStats().subscribe({ next: function (data) { return _this.stats = data; }, error: function (err) { return console.log({ err: err }); } });
        this.statsService.getStatsMessages().subscribe({
            next: function (data) { return _this.statsMessages = data; },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
