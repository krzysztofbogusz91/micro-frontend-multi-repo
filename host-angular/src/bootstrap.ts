import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { bootstrap } from '@angular-architects/module-federation-tools';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppModule, {
  production: environment.production,
  appType: 'shell',
});
