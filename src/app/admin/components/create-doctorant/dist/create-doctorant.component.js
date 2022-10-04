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
exports.CreateDoctorantComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CreateDoctorantComponent = /** @class */ (function () {
    function CreateDoctorantComponent(formBuilder, userService, route) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.route = route;
    }
    CreateDoctorantComponent.prototype.ngOnInit = function () {
        this.informationForm = this.formBuilder.group({
            name: [null],
            firstName: [null],
            nationality: [null],
            gender: [null],
            dateofBirth: [null],
            yearBacc: [null],
            adress: [null],
            cin: [null],
            serieBacc: [null],
            codeDoubling: [null],
            password: [null],
            passwordConfirmation: [null],
            email: [null],
            telephone: [null],
            isBoursier: [null],
            tauxBourse: [null],
            about: [null]
        });
        this.informationPreview$ = this.informationForm.valueChanges.pipe(rxjs_1.map(function (formValue) { return (__assign(__assign({}, formValue), { createdDate: new Date() })); }));
    };
    CreateDoctorantComponent.prototype.onSubmitprofilForm = function (form) {
        var _this = this;
        this.userService.addUser(form.value).subscribe({
            next: function (data) { return _this.route.navigate(['/admin/profil', data._id, data.role]); }
        });
    };
    CreateDoctorantComponent = __decorate([
        core_1.Component({
            selector: 'app-create-doctorant',
            templateUrl: './create-doctorant.component.html',
            styleUrls: ['./create-doctorant.component.scss']
        })
    ], CreateDoctorantComponent);
    return CreateDoctorantComponent;
}());
exports.CreateDoctorantComponent = CreateDoctorantComponent;
