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
var user_service_1 = require("../user/user.service");
var menu_component_1 = require("./menu.component");
var AccountComponent = (function () {
    function AccountComponent(logger, userService, navCtrl, navParams, popoverCtrl) {
        this.logger = logger;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.browseType = "reservations";
        this.logClass = "AccountComponent";
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.logger.log(this.logClass + '.init()');
        this.user = this.userService.getUser();
    };
    AccountComponent.prototype.showMenu = function (myEvent) {
        var popover = this.popoverCtrl.create(menu_component_1.MenuComponent);
        popover.present({
            ev: myEvent
        });
    };
    AccountComponent = __decorate([
        core_1.Component({
            templateUrl: 'pages/account/account.html',
            providers: [logger_service_1.LoggerService, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService, user_service_1.UserService, ionic_angular_1.NavController, ionic_angular_1.NavParams, ionic_angular_1.PopoverController])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
