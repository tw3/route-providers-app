import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { acmeAppConfig } from './app/configs/acme-app.config';

bootstrapApplication(AppComponent, acmeAppConfig).catch((err) => console.error(err));
