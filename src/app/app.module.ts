import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { SortByLikePipe } from './sort-by-like.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    DetailsComponent,
    SortByLikePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
