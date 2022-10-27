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
    function ChatsComponent(messageService, tokenService, formBuilder, http, statsService, userService) {
        var _this = this;
        this.messageService = messageService;
        this.tokenService = tokenService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.statsService = statsService;
        this.userService = userService;
        this.messages = [];
        this.isFileSaved = false;
        this.fileBase64 = undefined;
        this.fileName = '';
        this.idToDelete = '';
        this.showModal = false;
        this.statsMessages = {};
        this.users = [];
        this.staffs = [];
        this.currentUser = {};
        this.userIdConnected = undefined;
        this.selectUser = function (user) {
            _this.currentUser = user;
        };
    }
    ChatsComponent.prototype.ngOnInit = function () {
        this.getMessages();
        this.getStatsMessages();
        this.getAllDoctorants();
        this.getAllStaffs();
        this.userIdConnected = this.tokenService.getUserIdConnected() || 'Doctorant';
        this.messageForm = this.formBuilder.group({
            content: [''],
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
    ChatsComponent.prototype.getStatsMessages = function () {
        var _this = this;
        this.statsService.getStatsMessages().subscribe({
            next: function (data) { return _this.statsMessages = data; },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    ChatsComponent.prototype.setDeleteMessage = function (id) {
        this.idToDelete = id;
        this.showModal = true;
    };
    ChatsComponent.prototype.onCancelDelete = function () {
        this.showModal = false;
        this.idToDelete = undefined;
    };
    ChatsComponent.prototype.onSendMessage = function () {
        var _this = this;
        this.messageService.addMessage(__assign(__assign({}, this.messageForm.value), { expId: this.userIdConnected, isAdmin: false, isFile: false, expName: 'Doctorant' })).subscribe({
            next: function () {
                _this.getMessages();
                _this.getStatsMessages();
                _this.messageForm.reset();
            },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    ChatsComponent.prototype.selectFile = function (event) {
        var file = event.target.files[0];
        this.file = file;
        this.isFileSaved = true;
        this.fileName = file.name;
        this.messageForm.setValue({
            content: file.name || 'ok'
        });
    };
    ChatsComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('file', this.file);
        formData.append('expName', 'Doctorant');
        formData.append('isAdmin', 'false');
        formData.append('isFile', 'true');
        formData.append('expId', this.userIdConnected);
        this.http.post("http://localhost:1337/api/files", formData).subscribe({
            next: function () {
                _this.getMessages(),
                    _this.getStatsMessages();
                _this.isFileSaved = false;
                _this.messageForm.setValue({
                    content: ''
                });
            },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    ChatsComponent.prototype.onDeleteMessage = function () {
        var _this = this;
        this.messageService.deleteMessage(this.idToDelete).subscribe({
            next: function () {
                _this.getMessages();
                _this.showModal = false;
                _this.idToDelete = undefined;
            },
            error: function () { return _this.getMessages(); }
        });
    };
    ChatsComponent.prototype.getAllDoctorants = function () {
        var _this = this;
        this.userService.getUsers({ role: 'doctorant' }).subscribe({ next: function (data) {
                _this.users = data;
                _this.currentUser = data[0];
            }, error: function (err) { return console.log({ err: err }); } });
    };
    ChatsComponent.prototype.getAllStaffs = function () {
        var _this = this;
        this.userService.getUsers({ role: 'admin' }).subscribe({ next: function (data) {
                _this.staffs = data;
            }, error: function (err) { return console.log({ err: err }); } });
    };
    ChatsComponent.prototype.icon = function (str) {
        console.log(str, str.split('.'), str.split('.')[1]);
        if (str.split('.').pop() == 'pdf')
            return 'fa-file-pdf text-red-400';
        if (str.split('.').pop() == 'pptx')
            return 'fa-file-powerpoint text-red-800';
        if ((str.split('.').pop() == 'doc') || (str.split('.').pop() == 'docx'))
            return 'fa-file-word text-blue-700';
        if ((str.split('.').pop() == 'jpg') || (str.split('.').pop() == 'png') || (str.split('.').pop() == 'jpeg'))
            return 'fa-file-image text-blue-300';
        return 'fa-file';
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
