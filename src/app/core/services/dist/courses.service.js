"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../../../environments/environment");
var CoursesService = /** @class */ (function () {
    function CoursesService(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = environment_1.environment.apiUrl;
        this.httpHeader = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    CoursesService.prototype.getCoursess = function (data) {
        return this.httpClient.get(this.endpoint + '/api/courses', { params: data })
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    CoursesService.prototype.getSingleCourses = function (id) {
        return this.httpClient
            .get(this.endpoint + '/api/courses/' + id)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    CoursesService.prototype.addCourses = function (data) {
        var req = this.httpClient
            .post(this.endpoint + '/api/courses', JSON.stringify(data), this.httpHeader)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
        return req;
    };
    CoursesService.prototype.updateCourses = function (data) {
        return this.httpClient
            .put(this.endpoint + '/api/courses/' + data._id, JSON.stringify(data), this.httpHeader)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    CoursesService.prototype.deleteCourses = function (id) {
        return this.httpClient["delete"](this.endpoint + '/api/courses/' + id, this.httpHeader)
            .pipe(operators_1.catchError(this.processError));
    };
    CoursesService.prototype.processError = function (err) {
        var message = '';
        if (err.error instanceof ErrorEvent) {
            message = err.error.message;
        }
        else {
            message = "Error Code: " + err.status + "\nMessage: " + err.message;
        }
        console.log(message);
        return rxjs_1.throwError(function () {
            message;
        });
    };
    CoursesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CoursesService);
    return CoursesService;
}());
exports.CoursesService = CoursesService;
