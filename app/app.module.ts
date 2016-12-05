import { NgModule } from "@angular/core";

import { IonicApp, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './user/login.component';


@NgModule({
    imports: [
        IonicModule.forRoot(AppComponent)
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        ListingComponent,
        LoginComponent
    ],
    entryComponents: [
        AppComponent,
        SearchComponent,
        ListingComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [IonicApp]
})

export class AppModule {}