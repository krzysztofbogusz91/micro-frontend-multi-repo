// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js';
import { bootstrap } from '@angular-architects/module-federation-tools';

// bootstrap(AppModule, {
//   production: environment.production,
//   appType: 'microfrontend', // for micro frontend
//   // appType: 'shell',      // for shell
// });
bootstrap(AppModule, {
  production: environment.production,
  appType: 'microfrontend', // for micro frontend
  // appType: 'shell',      // for shell
});
