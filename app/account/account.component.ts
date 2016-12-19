import { Component, OnInit } from "@angular/core";

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { LoggerService } from "../core/logger.service";
import { User } from "../user/user";
import { UserService } from "../user/user.service";
import { MenuComponent } from "./menu.component";
import { Reservation } from "../reservation/reservation";
import { ReservationService } from "../reservation/reservation.service";

@Component({
    templateUrl: 'pages/account/account.html',
    providers: [ LoggerService, UserService, ReservationService ]
})

export class AccountComponent implements OnInit {
    user: User;
    reservations: Reservation[] = [];
    browseType: string = "reservations";

    private logClass:String = "AccountComponent";

    constructor(
        private logger: LoggerService,
        private userService: UserService,
        private reservationService: ReservationService,
        public navCtrl: NavController, 
        public navParams: NavParams,
        public popoverCtrl: PopoverController 
    ) { }

    ngOnInit(): void {
        this.logger.log(this.logClass + '.init()');

        this.user = this.userService.getUser();
        this.reservations = this.reservationService.get(this.user.id);
    }

    showMenu(myEvent) {
        let popover = this.popoverCtrl.create(MenuComponent);
        popover.present({
            ev: myEvent
        });
    } 
}