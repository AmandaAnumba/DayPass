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
var business_service_1 = require("../search/business.service");
var ListingComponent = (function () {
    function ListingComponent(businessService, logger, nav, navParams) {
        this.businessService = businessService;
        this.logger = logger;
        this.nav = nav;
        this.navParams = navParams;
        this.logClass = "ListingComponent";
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.logger.log(this.logClass + '.init()');
        this.listingId = this.navParams.get('listing');
        this.logger.log(this.listingId.toString());
        this.listing = this.businessService.getBusiness(+this.listingId);
        this.logger.log(this.listing.name);
        // .then(business => this.listing = business);
    };
    ListingComponent.prototype.goBack = function () {
        this.nav.pop();
    };
    ListingComponent = __decorate([
        core_1.Component({
            templateUrl: 'pages/listing/listing.html',
            providers: [business_service_1.BusinessService, logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [business_service_1.BusinessService, logger_service_1.LoggerService, ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], ListingComponent);
    return ListingComponent;
}());
exports.ListingComponent = ListingComponent;
