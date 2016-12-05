import { Component, OnInit } from "@angular/core";

import { NavController, NavParams } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";
import { Business } from "../search/business";
import { BusinessService } from "../search/business.service";

@Component({
    templateUrl: 'pages/listing/listing.html',
    providers: [ BusinessService ]
})

export class ListingComponent implements OnInit {
    listing: Business;

    private logClass:String = "ListingComponent";

    constructor(
        private businessService: BusinessService,
        private logger: LoggerService,
        public nav: NavController, 
        public navParams: NavParams
    ) { }

    ngOnInit(): void {
        this.logger.log(this.logClass + '.init()');
        
        this.listing = this.navParams.get('listing');
        console.log(this.listing);
        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.businessService.get(id)
        //         .then(business => this.listing = business);
        // });
    }
}