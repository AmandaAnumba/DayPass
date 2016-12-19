import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, MenuController, NavController, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './user/login.component';
import { LoggerService } from "./core/logger.service";
import { User } from "./user/user";
import { UserService } from "./user/user.service";

@Component({
    templateUrl: 'pages/app.html',
    providers: [ LoggerService, UserService ]
})

export class AppComponent implements OnInit {
    @ViewChild('nav') nav: NavController;
    
    user: User;
    // rootPage: any = AccountComponent;  // make SearchComponent the temp root page
    rootPage: any = SearchComponent;  // make SearchComponent the temp root page
    pages: Array<{title: string, component: any}>;
    private logClass:String = "AppComponent";

    constructor(
        private logger: LoggerService,
        private userService: UserService,
        public platform: Platform,
        public menu: MenuController,
        public modalCtrl: ModalController
    ) { }

    ngOnInit(): void {
        this.logger.log(this.logClass + ' init');
        // this.initializeApp();
        
        this.user = this.userService.getUser();

        this.pages = [
            { title: 'Explore', component: SearchComponent },
            { title: 'My Account', component: AccountComponent },
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    }

    presentLoginModal() {
        let loginModal = this.modalCtrl.create(LoginComponent);
        this.menu.close();
        loginModal.present();
    }
}