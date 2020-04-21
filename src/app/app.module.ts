import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DebugComponent } from './debug/debug.component';
import {Connect, Effects} from "ng-effects";

@NgModule({
    declarations: [
        AppComponent,
        DebugComponent,
        DebugComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [Effects], /** Workaround for https://github.com/stupidawesome/ng-effects/issues/8 **/
  bootstrap: [AppComponent]
})
export class AppModule {
  /** Workaround for https://github.com/stupidawesome/ng-effects/issues/8 **/
    constructor(connect: Connect) {
      connect(this)
    }
}
