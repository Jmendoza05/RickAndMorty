import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailChararterComponent } from './components/detail-chararter/detail-chararter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalEpisodeComponent } from './components/element/modal-episode/modal-episode.component';
import { ModalLocationComponent } from './components/element/modal-location/modal-location.component';
import { ToastrModule } from 'ngx-toastr'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailChararterComponent,
    ModalEpisodeComponent,
    ModalLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
