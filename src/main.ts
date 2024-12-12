import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {HomeComponent} from './app/home/home.component';
import {PortfolioComponent} from './app/portfolio/portfolio.component';
import {ContactComponent} from './app/contact/contact.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {path: '', component: HomeComponent}, // Route for home
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'contact', component: ContactComponent}
    ]), // Add routes here later
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
