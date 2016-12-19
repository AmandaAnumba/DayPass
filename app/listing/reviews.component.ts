import { Component, OnInit } from "@angular/core";

import { NavController, NavParams } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";
import { Business } from "../search/business";
import { BusinessService } from "../search/business.service";

@Component({
    templateUrl: 'pages/listing/reviews.html',
    providers: [ BusinessService, LoggerService ]
})

export class ReviewsComponent implements OnInit {

    private logClass:String = "ReviewsComponent";

    constructor(
        private businessService: BusinessService,
        private logger: LoggerService,
        public nav:NavController, 
        public navParams: NavParams
    ) { }

    ngOnInit(): void {
        this.logger.log(this.logClass + '.init()');
    }

    goBack() {
        this.nav.pop(); 
    }
}