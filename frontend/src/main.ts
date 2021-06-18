import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//--
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Bootstraping App
function bootstrap(data) {
  return platformBrowserDynamic([{ provide: 'Config', useValue: data }]).bootstrapModule(AppModule)
    .then(() => { (<any>window).appBootstrap && (<any>window).appBootstrap(); })
    .catch(err => console.error(err));
}

bootstrap({});