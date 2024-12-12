import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEnvelope, faPhone, faLink} from '@fortawesome/free-solid-svg-icons';
import {NgClass, NgOptimizedImage, NgStyle} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  imports: [RouterModule, FontAwesomeModule, NgClass, MatButton, NgOptimizedImage, NgStyle],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  public aboutData = {
    NavTabs: [
      {id: 'who', name: 'Who I Am'},
      {id: 'what', name: 'What I Do'},
      {id: 'why', name: 'Why I Do It'},
    ],
  };

  public activeTab = 'who';
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  constructor(private route: ActivatedRoute, library: FaIconLibrary) {
    library.addIcons(faEnvelope, faPhone, faLink, faInstagram, faYoutube);
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }
    });
  }

  ngAfterViewInit(): void {
    const videoElement = this.backgroundVideo.nativeElement;
    videoElement.muted = true; // Force mute programmatically
  }

  changeActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
