import {
  Component,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIcon,
    MatSidenav,
    MatListItem,
    MatSidenavContainer,
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isScrolled = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {}

  // Toggle 'scrolled' class on window scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50; // Add 'scrolled' class when scrolled more than 50px
  }

  // Determine if a route and fragment are active
  isActive(route: string, fragment?: string): boolean {
    const currentRoute = this.router.url.split('#')[0];
    const currentFragment = this.route.snapshot.fragment;

    return (
      currentRoute === route && (!fragment || currentFragment === fragment)
    );
  }

  // Toggle sidenav for mobile
  toggleSidenav(): void {
    if (this.sidenav) {
      this.sidenav.toggle(); // Toggle the sidenav state
    }
  }
}
