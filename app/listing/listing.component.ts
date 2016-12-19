import { Component, OnInit } from "@angular/core";

import { NavController, NavParams } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";
import { Business } from "../search/business";
import { BusinessService } from "../search/business.service";
import { ReviewsComponent } from "./reviews.component";
import { ServicesComponent } from "./services.component";

@Component({
    templateUrl: 'pages/listing/listing.html',
    providers: [ BusinessService, LoggerService ]
})

export class ListingComponent implements OnInit {
    listing: Business;
    listingId: Number;

    /* define tabs */
    tab1: any;
    tab2: any;

    private logClass:String = "ListingComponent";

    constructor(
        private businessService: BusinessService,
        private logger: LoggerService,
        public nav:NavController, 
        public navParams: NavParams
    ) { }

    ngOnInit(): void {
        this.logger.log(this.logClass + '.init()');
        
        this.listingId = this.navParams.get('listing');
        this.logger.log(this.listingId.toString());

        this.listing = this.businessService.getBusiness(+this.listingId);
        this.logger.log(this.listing.name);


            // .then(business => this.listing = business);
    }

    goBack() {
        this.nav.pop(); 
    }
}