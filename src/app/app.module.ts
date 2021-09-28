import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartjsModule, FlotModule, InlineModule, MenuModule, UplotModule } from 'my-module-a';

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
    FlotModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
