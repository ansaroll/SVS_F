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
exports.SettingsComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, doctorantService) {
        this.formBuilder = formBuilder;
        this.doctorantService = doctorantService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            email: [null],
            telephone: [null],
            isBoursier: [null],
            tauxBourse: [null],
            about: [null],
            imageUrl: [null]
        });
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
            codeDoubling: [null]
        });
        this.contactPreview$ = this.contactForm.valueChanges.pipe(rxjs_1.map(function (formValue) { return (__assign(__assign({}, formValue), { createdDate: new Date() })); }));
        this.informationPreview$ = this.informationForm.valueChanges.pipe(rxjs_1.map(function (formValue) { return (__assign({}, formValue)); }));
    };
    SettingsComponent.prototype.onSubmitprofilForm = function (form) {
        // alert('hey')
        this.doctorantService.addDoctorant(form.value);
        console.log(form.value);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss']
        })
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
