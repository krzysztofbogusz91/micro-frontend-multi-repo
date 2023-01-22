import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, AppRoutingModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule],
  exports: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // console.log('FeedModule');

    const tileCE = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('angular-element', tileCE);
    // console.log(tileCE);
    // console.log(customElements);
    // console.log(tileCE);
  }
}
