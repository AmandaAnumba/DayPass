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
var app_component_1 = require('./app.component');
var search_component_1 = require('./search/search.component');
var account_component_1 = require('./account/account.component');
var menu_component_1 = require('./account/menu.component');
var listing_component_1 = require('./listing/listing.component');
var reviews_component_1 = require('./listing/reviews.component');
var services_component_1 = require('./listing/services.component');
var login_component_1 = require('./user/login.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.AppComponent)
            ],
            declarations: [
                app_component_1.AppComponent,
                search_component_1.SearchComponent,
                account_component_1.AccountComponent,
                menu_component_1.MenuComponent,
                listing_component_1.ListingComponent,
                reviews_component_1.ReviewsComponent,
                services_component_1.ServicesComponent,
                login_component_1.LoginComponent
            ],
            entryComponents: [
                app_component_1.AppComponent,
                search_component_1.SearchComponent,
                account_component_1.AccountComponent,
                menu_component_1.MenuComponent,
                listing_component_1.ListingComponent,
                login_component_1.LoginComponent
            ],
            providers: [],
            bootstrap: [ionic_angular_1.IonicApp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
