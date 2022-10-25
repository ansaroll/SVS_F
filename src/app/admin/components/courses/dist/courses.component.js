"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesComponent = void 0;
var core_1 = require("@angular/core");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(coursesService) {
        this.coursesService = coursesService;
        this.courses = [];
        this.idToDelete = '';
        this.showModal = false;
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.getAllCourses();
    };
    CoursesComponent.prototype.setDeleteCourse = function (id) {
        this.idToDelete = id;
        this.showModal = true;
    };
    CoursesComponent.prototype.onCancelDelete = function () {
        this.showModal = false;
        this.idToDelete = undefined;
    };
    CoursesComponent.prototype.getAllCourses = function () {
        var _this = this;
        this.coursesService.getCoursess({}).subscribe({
            next: function (data) {
                _this.courses = data;
            },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    CoursesComponent.prototype.onDeleteCourse = function () {
        var _this = this;
        this.coursesService.deleteCourses(this.idToDelete).subscribe({
            next: function (data) {
                console.log({ data: data });
                _this.showModal = false;
                _this.idToDelete = undefined;
                _this.getAllCourses();
            },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            templateUrl: './courses.component.html',
            styleUrls: ['./courses.component.scss']
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
