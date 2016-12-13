import { Component } from "@angular/core";

import { ViewController } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";

@Component({
    templateUrl: 'pages/account/menu.html',
    providers: [ LoggerService ]
})

export class MenuComponent {
    user: any = {};

    constructor(
        private logger: LoggerService,
        public viewCtrl: ViewController
    ) { }

    close() {
        this.viewCtrl.dismiss();
    }
}