import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SearchComponent } from './search/search.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './user/login.component';


@Component({
    templateUrl: 'pages/app.html',
})

export class AppComponent implements OnInit {
    @ViewChild(Nav) nav: Nav;

    // make SearchComponent the temp root page
    rootPage: any = SearchComponent;
    pages: Array<{title: string, component: any}>;

    constructor(
        public platform: Platform,
        public menu: MenuController,
        public modalCtrl: ModalController
    ) { }

    ngOnInit(): void {
        // this.initializeApp();

        this.pages = [
            { title: 'Salons Near Me', component: SearchComponent },
            // { title: 'Listing', component: ListingComponent },
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }

    presentLoginModal() {
        let loginModal = this.modalCtrl.create(LoginComponent);
        this.menu.close();
        loginModal.present();
    }
}
