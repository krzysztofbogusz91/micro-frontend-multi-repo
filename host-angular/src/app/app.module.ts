import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModuleFederationToolsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
