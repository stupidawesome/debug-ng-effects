import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DebugComponent } from './debug/debug.component';

@NgModule({
    declarations: [
        AppComponent,
        DebugComponent,
        DebugComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
