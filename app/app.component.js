"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var search_component_1 = require('./search/search.component');
var account_component_1 = require('./account/account.component');
var login_component_1 = require('./user/login.component');
var AppComponent = (function () {
    function AppComponent(platform, menu, modalCtrl) {
        this.platform = platform;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.rootPage = account_component_1.AccountComponent; // make SearchComponent the temp root page
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.initializeApp();
        this.pages = [
            { title: 'Explore', component: search_component_1.SearchComponent },
            { title: 'My Account', component: account_component_1.AccountComponent },
        ];
    };
    AppComponent.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    AppComponent.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    AppComponent.prototype.presentLoginModal = function () {
        var loginModal = this.modalCtrl.create(login_component_1.LoginComponent);
        this.menu.close();
        loginModal.present();
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: 'pages/app.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, ionic_angular_1.MenuController, ionic_angular_1.ModalController])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
