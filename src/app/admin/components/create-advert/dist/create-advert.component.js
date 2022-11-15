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
exports.CreateAdvertComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CreateAdvertComponent = /** @class */ (function () {
    function CreateAdvertComponent(formBuilder, coursesService, route, router) {
        this.formBuilder = formBuilder;
        this.coursesService = coursesService;
        this.route = route;
        this.router = router;
        this.imageSaved = false;
        this.isUpdate = false;
    }
    CreateAdvertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formationForm = this.formBuilder.group({
            title: [null],
            description: [null],
            responsible: [null],
            image: [null],
            enabled: false
        });
        if (this.route.snapshot.paramMap.get('id') != null) {
            this.isUpdate = true;
            this.coursesService.getSingleAdvert(this.route.snapshot.paramMap.get('id')).subscribe({
                next: function (data) {
                    _this.formationForm.setValue({
                        title: data.title || '',
                        description: data.description || '',
                        responsible: data.responsible || '',
                        image: data.image || '',
                        enabled: data.enabled || false
                    }),
                        _this.imageSaved = data.image != undefined,
                        _this.pdpBase64 = data.image || '';
                },
                error: function (err) { return console.log({ err: err }); }
            });
        }
        this.formationPreview$ = this.formationForm.valueChanges.pipe(rxjs_1.map(function (formValue) { return (__assign(__assign({}, formValue), { createdDate: new Date() })); }));
    };
    CreateAdvertComponent.prototype.uploadImage = function (fileInput) {
        var _this = this;
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function (rs) {
                    _this.pdpBase64 = e.target.result;
                    _this.imageSaved = true;
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CreateAdvertComponent.prototype.onSubmitFormation = function () {
        var _this = this;
        this.coursesService.addAdvert(__assign(__assign({}, this.formationForm.value), { image: this.pdpBase64 })).subscribe({
            next: function () { return _this.router.navigateByUrl('/admin/advert'); },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    CreateAdvertComponent.prototype.onUpdateFormation = function () {
        var _this = this;
        this.coursesService.updateAdvert(__assign(__assign({}, this.formationForm.value), { image: this.pdpBase64, _id: this.route.snapshot.paramMap.get('id') })).subscribe({
            next: function () { return _this.router.navigateByUrl('/admin/advert'); },
            error: function (err) { return console.log({ err: err }); }
        });
    };
    CreateAdvertComponent = __decorate([
        core_1.Component({
            selector: 'app-create-advert',
            templateUrl: './create-advert.component.html',
            styleUrls: ['./create-advert.component.scss']
        })
    ], CreateAdvertComponent);
    return CreateAdvertComponent;
}());
exports.CreateAdvertComponent = CreateAdvertComponent;
