import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err: Error): void =>
  console.error(err.message),
);
