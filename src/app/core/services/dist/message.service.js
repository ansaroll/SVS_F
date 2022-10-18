"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MessageService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../../../environments/environment");
var MessageService = /** @class */ (function () {
    function MessageService(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = environment_1.environment.apiUrl;
        this.httpHeader = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    MessageService.prototype.getMessages = function () {
        return this.httpClient.get(this.endpoint + '/api/messages')
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    MessageService.prototype.getSingleMessage = function (id) {
        return this.httpClient
            .get(this.endpoint + '/api/message/' + id)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    MessageService.prototype.addMessage = function (data) {
        var req = this.httpClient
            .post(this.endpoint + '/api/message', JSON.stringify(data), this.httpHeader)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
        return req;
    };
    // addPdpMessage(data:TPayloadPdp): Observable<Partial<TPayloadPdp>>{
    //   const req = this.httpClient
    //     .post<Partial<TPayloadPdp>>(
    //       this.endpoint + '/api/message/pdp',
    //       JSON.stringify(data),
    //       this.httpHeader
    //     )
    //     return req
    // }
    MessageService.prototype.updateMessage = function (id, data) {
        return this.httpClient
            .put(this.endpoint + '/api/message/' + id, JSON.stringify(data), this.httpHeader)
            .pipe(operators_1.retry(1), operators_1.catchError(this.processError));
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this.httpClient["delete"](this.endpoint + '/api/message/' + id, this.httpHeader);
    };
    MessageService.prototype.processError = function (err) {
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
    MessageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
