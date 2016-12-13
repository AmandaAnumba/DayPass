import { NgModule } from "@angular/core";

import { IonicApp, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './account/menu.component';
import { ListingComponent } from './listing/listing.component';
import { ReviewsComponent } from './listing/reviews.component';
import { ServicesComponent } from './listing/services.component';
import { LoginComponent } from './user/login.component';


@NgModule({
    imports: [
        IonicModule.forRoot(AppComponent)
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        AccountComponent,
        MenuComponent,
        ListingComponent,
        ReviewsComponent,
        ServicesComponent,
        LoginComponent
    ],
    entryComponents: [
        AppComponent,
        SearchComponent,
        AccountComponent,
        MenuComponent,
        ListingComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [IonicApp]
})

export class AppModule {}