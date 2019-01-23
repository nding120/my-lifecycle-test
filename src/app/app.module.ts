import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FirstExComponent } from './first-ex/first-ex.component';
import {SimpleComponent} from './lifeCycleHook/simple.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    //includes component, pipe, direvtive
    AppComponent,
    //FirstExComponent,
    SimpleComponent,
  ],
  imports: [
    //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
