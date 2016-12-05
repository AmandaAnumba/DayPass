import { Component, OnInit } from "@angular/core";

import { NavController, NavParams } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";
import { Business } from "./business";
import { BusinessService } from "./business.service";
import { ListingComponent } from '../listing/listing.component';

@Component({
    templateUrl: 'pages/search/search.html',
    providers: [ BusinessService, LoggerService ]
})

export class SearchComponent implements OnInit {
    results: Business[] = [];
    selectedBusiness: Business;

    private logClass:String = "SearchComponent";

    constructor(
        private businessService: BusinessService,
        private logger: LoggerService,
        public nav: NavController, 
        public navParams: NavParams
    ) { }

    ngOnInit(): void {
        this.loadResults();
    }

    loadResults(): void {
        this.logger.log(this.logClass + '.loadResults()');
        this.businessService.getBusinesses()
            .then( businesses => this.results = businesses);
    }

    showListing( id:string ): void {
        this.logger.log(this.logClass + '.showListing( ' + id + ' )');

        this.businessService.getBusiness(+id)
            .then(business => this.selectedBusiness = business);
        
        this.logger.log(this.selectedBusiness.name);

        this.nav.push(ListingComponent, {
            listing: this.selectedBusiness
        });
    }
}