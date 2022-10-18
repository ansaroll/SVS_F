"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatsComponent = void 0;
var core_1 = require("@angular/core");
var ChatsComponent = /** @class */ (function () {
    function ChatsComponent(messageService, tokenService, formBuilder, http) {
        this.messageService = messageService;
        this.tokenService = tokenService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.messages = [];
        this.isFileSaved = false;
        this.fileBase64 = undefined;
        this.userIdConnected = undefined;
    }
    ChatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages().subscribe({
            next: function (data) { return _this.messages = data; },
            error: function (err) { return console.log({ err: err }); }
        });
        this.userIdConnected = this.tokenService.getUserIdConnected() || 'Admin';
        this.messageForm = this.formBuilder.group({
            content: [null],
            isFile: [false]
        });
    };
    ChatsComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getMessages().subscribe({
            next: function (data) { return _this.messages = data; },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    ChatsComponent.prototype.onSendMessage = function () {
        var _this = this;
        this.messageService.addMessage(__assign(__assign({}, this.messageForm.value), { expId: this.userIdConnected, isAdmin: true, expName: 'Admin' })).subscribe({
            next: function () { return _this.getMessages(); },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    ChatsComponent.prototype.selectFile = function (event) {
        var file = event.target.files[0];
        this.file = file;
        console.log({ file: file });
    };
    ChatsComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('file', this.file);
        formData.append('expName', 'Admin');
        formData.append('isAdmin', 'true');
        formData.append('isFile', 'true');
        formData.append('expId', this.userIdConnected);
        this.http.post("http://localhost:1337/api/files", formData).subscribe({
            next: function () { return _this.getMessages(); },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    ChatsComponent.prototype.onDeleteMessage = function (_id) {
        var _this = this;
        this.messageService.deleteMessage(_id).subscribe({
            next: function () { return _this.getMessages(); },
            error: function () { return _this.getMessages(); }
        });
    };
    ChatsComponent = __decorate([
        core_1.Component({
            selector: 'app-chats',
            templateUrl: './chats.component.html',
            styleUrls: ['./chats.component.scss']
        })
    ], ChatsComponent);
    return ChatsComponent;
}());
exports.ChatsComponent = ChatsComponent;
