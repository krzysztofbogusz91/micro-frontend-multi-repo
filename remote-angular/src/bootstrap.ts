// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { bootstrap } from '@angular-architects/module-federation-tools';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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
// const mount = () => {
//   platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .catch((err) => console.error(err));
// };

// export { mount };
