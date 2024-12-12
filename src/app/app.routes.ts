import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component')
      .then(m => m.PortfolioComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component')
      .then(m => m.ContactComponent)
  },
];
