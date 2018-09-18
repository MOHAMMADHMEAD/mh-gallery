import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LightboxModule} from "angular2-lightbox";
import { MhComponent } from './mh/mh.component';


@NgModule({
  declarations: [
    AppComponent,
    MhComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
