import { Component, OnInit } from "@angular/core";

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";
import { User } from "../user/user";
import { UserService } from "../user/user.service";
import { MenuComponent } from "./menu.component";

@Component({
    templateUrl: 'pages/account/account.html',
    providers: [ LoggerService, UserService ]
})

export class AccountComponent implements OnInit {
    user: User;
    browseType: string = "reservations";

    private logClass:String = "AccountComponent";

    constructor(
        private logger: LoggerService,
        private userService: UserService,
        public navCtrl: NavController, 
        public navParams: NavParams,
        public popoverCtrl: PopoverController 
    ) { }

    ngOnInit(): void {
        this.logger.log(this.logClass + '.init()');

        this.user = this.userService.getUser();
    }

    showMenu(myEvent) {
        let popover = this.popoverCtrl.create(MenuComponent);
        popover.present({
            ev: myEvent
        });
    } 
}