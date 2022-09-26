"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DoctorantService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var DoctorantService = /** @class */ (function () {
    function DoctorantService(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = 'http://localhost:1337';
        this.httpHeader = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    DoctorantService.prototype.getDoctorants = function () {
        return this.httpClient.get(this.endpoint + '/api/doctorants')
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    DoctorantService.prototype.getSingleDoctorant = function (id) {
        console.log({ id: id });
        return this.httpClient
            .get(this.endpoint + '/api/Doctorant/' + id)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    DoctorantService.prototype.addDoctorant = function (data) {
        var req = this.httpClient
            .post(this.endpoint + '/api/doctorants', JSON.stringify(data), this.httpHeader)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
        req.subscribe();
        return req;
    };
    DoctorantService.prototype.updateDoctorant = function (id, data) {
        return this.httpClient
            .put(this.endpoint + '/Doctorants/' + id, JSON.stringify(data), this.httpHeader)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    DoctorantService.prototype.deleteDoctorant = function (id) {
        return this.httpClient["delete"](this.endpoint + '/Doctorants/' + id, this.httpHeader)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    DoctorantService.prototype.processError = function (err) {
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
    DoctorantService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DoctorantService);
    return DoctorantService;
}());
exports.DoctorantService = DoctorantService;
