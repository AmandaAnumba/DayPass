import { Component } from "@angular/core";

import { Platform, NavParams, ViewController } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";

@Component({
    templateUrl: 'pages/login-modal.html',
    providers: [ LoggerService ]
})

export class LoginComponent {
    user: any = {};

    constructor(
        private logger: LoggerService,
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) { }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    login() {
    	this.logger.log( this.user );
    }
}