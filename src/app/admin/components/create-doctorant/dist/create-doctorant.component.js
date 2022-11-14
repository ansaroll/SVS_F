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
    function CreateDoctorantComponent(formBuilder, userService, router, route) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.userId = null;
        this.role = null;
        this.isUpdate = false;
        this.dataPdpBase64 = undefined;
        this.userSignUp = {
            name: '',
            password: '',
            passwordconfirm: '',
            email: ''
        };
    }
    CreateDoctorantComponent.prototype.ngOnInit = function () {
        // this.userId = this.route.snapshot.paramMap.get('id')
        // this.role = this.route.snapshot.paramMap.get('role')
        var _this = this;
        this.informationForm = this.formBuilder.group({
            name: [null],
            firstName: [null],
            nationality: [null],
            gender: [null],
            dateOfBirth: [null],
            yearBacc: [1000],
            adress: [null],
            cin: [null],
            serieBacc: [null],
            codeDoubling: [null],
            password: [null],
            passwordConfirmation: [null],
            email: [null],
            telephone: [null],
            isBoursier: [false],
            tauxBourse: [null],
            about: [null],
            poste: [null],
            im: [null],
            pictureUrl: [null],
            role: ["doctorant"]
        });
        if (this.route.snapshot.paramMap.get('id') != null) {
            this.isUpdate = true;
            this.userService.getSingleUser(this.route.snapshot.paramMap.get('id')).subscribe({
                next: function (data) {
                    _this.dataPdpBase64 = data.pictureUrl;
                    _this.informationForm.setValue({
                        name: data.name || '',
                        firstName: data.firstName || '',
                        nationality: data.nationality || '',
                        gender: data.gender || '',
                        dateOfBirth: data.dateOfBirth || '',
                        yearBacc: data.yearBacc || '1000',
                        adress: data.adress || '',
                        cin: data.cin || '',
                        serieBacc: data.serieBacc || '',
                        codeDoubling: data.codeDoubling || '',
                        password: '',
                        passwordConfirmation: '',
                        email: data.email || '',
                        telephone: data.telephone || '',
                        isBoursier: data.isBoursier || 'false',
                        tauxBourse: data.tauxBourse || 0,
                        about: data.about || '',
                        poste: data.poste || '',
                        im: data.im || '',
                        role: data.role || '',
                        pictureUrl: data.pictureUrl || ''
                    });
                },
                error: function (err) { return console.log({ err: err }); }
            });
        }
        this.informationPreview$ = this.informationForm.valueChanges.pipe(rxjs_1.map(function (formValue) { return (__assign(__assign({}, formValue), { createdAt: new Date() })); }));
    };
    CreateDoctorantComponent.prototype.onSubmitprofilForm = function (form) {
        var _this = this;
        this.userService.addUser(form.value).subscribe({
            next: function (data) { return _this.router.navigate(['/admin/profil', data._id, data.role]); }
        });
    };
    CreateDoctorantComponent.prototype.onUpdateProfil = function (form) {
        var _this = this;
        this.userService.updateUser(this.route.snapshot.paramMap.get('id'), form.value).subscribe({
            next: function (data) { return _this.router.navigate(['/admin/profil', data._id, data.role]); }
        });
    };
    __decorate([
        core_1.Input()
    ], CreateDoctorantComponent.prototype, "userSignUp");
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
