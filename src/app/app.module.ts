import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetmovieService } from './getmovie.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { GetmoviedetailsService } from './getmoviedetails.service';
import { FavoriteService } from './favorite.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [GetmovieService,SearchService,GetmoviedetailsService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
