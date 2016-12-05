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
var core_1 = require("@angular/core");
var ionic_angular_1 = require('ionic-angular');
var logger_service_1 = require("../core/logger.service");
var LoginComponent = (function () {
    function LoginComponent(logger, platform, params, viewCtrl) {
        this.logger = logger;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.user = {};
    }
    LoginComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginComponent.prototype.login = function () {
        this.logger.log(this.user);
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'pages/login-modal.html',
            providers: [logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService, ionic_angular_1.Platform, ionic_angular_1.NavParams, ionic_angular_1.ViewController])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
