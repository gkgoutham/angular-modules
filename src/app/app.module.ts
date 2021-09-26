import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartjsModule, FlotModule, InlineModule, UplotModule } from 'my-module-a';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartjsModule,
    InlineModule,
    UplotModule,
    FlotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
