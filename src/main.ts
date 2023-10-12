import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(APP_ROUTES)), provideAnimations()]
});
