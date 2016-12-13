import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './user/login.component';


@Component({
    templateUrl: 'pages/app.html',
})

export class AppComponent implements OnInit {
    @ViewChild(Nav) nav: Nav;
    
    rootPage: any = AccountComponent;  // make SearchComponent the temp root page
    // rootPage: any = SearchComponent;  // make SearchComponent the temp root page
    pages: Array<{title: string, component: any}>;

    constructor(
        public platform: Platform,
        public menu: MenuController,
        public modalCtrl: ModalController
    ) { }

    ngOnInit(): void {
        // this.initializeApp();

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