import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Appcomponent = require("./app.component");
import AppComponent = Appcomponent.AppComponent;

@NgModule({
    imports: [BrowserModule],
    declarations: [Appcomponent.AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }