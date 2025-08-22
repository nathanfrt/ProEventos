import { App } from './app/app';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations() // garante suporte a animações
  ],
}).catch(err => console.error(err));
