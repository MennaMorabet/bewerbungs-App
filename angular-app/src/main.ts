import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { UserService } from './app/user.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    //##importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    {provide: UserService, useClass: UserService}
  ],
})
  .catch((err) => console.error(err));
