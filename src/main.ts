import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }))
  ]
});
