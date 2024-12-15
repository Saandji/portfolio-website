import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgClass} from '@angular/common';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [
    MatButton,
    NgClass,
    MatGridList,
    MatGridTile
  ],
  standalone: true
})
export class PortfolioComponent implements OnInit {
  filters = ['All', 'Nature', 'Events', 'Documentary', 'Real Estate'];
  activeFilter = 'All';
  breakpoint: number = (window.innerWidth <= 500) ? 1 : 4;

  ngOnInit() {
    console.log(window.innerWidth)
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 4;

  }

  getHorizontalColSpan() {
    return (window.innerWidth <= 500) ? 1 : 2;
  }

  sections = [
    {
      type: 'Nature',
      title: 'Nature Videos',
      description: 'Showcasing the breathtaking beauty of nature and its tranquility.',
      alternateLayout: false,
      videos: [
        {
          id: 2,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/nature_horizontal.mp4',
          colspan: this.getHorizontalColSpan(),
          rowspan: 1
        },
        {
          id: 1,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/night_sky_insta.mp4',
          colspan: 1,
          rowspan: 2
        },
        {
          id: 3,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/Youtube_Nature_Short.mp4',
          colspan: 1,
          rowspan: 2
        },
        {
          id: 6, src: '', extraInfo: `
          <h3>Showcasing Nature's Beauty</h3>
          <p>
            Whether you want to highlight the breathtaking landscapes of a serene forest, the vibrant colors of alpine meadows,
            or the unique charm of a hidden trail, I can bring your vision to life.
          </p>
          <p>
            My videos capture the essence of nature's beauty,
              creating a lasting impression that tells your story with authenticity and impact.
          </p>
        `, colspan: this.getHorizontalColSpan(), rowspan: 1
        }
      ],
    },
    {
      type: 'Events',
      title: 'Events Videos',
      description: 'Attending and showing the stories of the outdoor and indoor events.',
      alternateLayout: false,
      videos: [
        {id: 1, src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/NF_teaser.mp4', colspan: 1, rowspan: 2},
        {
          id: 2,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/chamonix_vertical.mp4',
          colspan: 1,
          rowspan: 2
        },
        {
          id: 6, src: '', extraInfo: `
          <p>Attending the outdoor events from different brands and capturing them without disturbing the event flows.</p>
          <p>Great for creating the recap videos, documentary style videos, taking interviews from athletes who
          attended the events or using it for the future promotional materials.</p>
        `, colspan: this.getHorizontalColSpan(), rowspan: 1
        },
        {
          id: 4,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/chamonix_horizontal.mp4',
          colspan: this.getHorizontalColSpan(),
          rowspan: 1
        }
      ],
    },
    {
      type: 'Documentary',
      title: 'Documentary Videos',
      description: 'Documenting One or Multi-day adventure, Athlete Stories and Trainings.',
      alternateLayout: false,
      videos: [
        {
          id: 1,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/via_ferrata_nastya.mp4',
          colspan: 1,
          rowspan: 2
        },
        {
          id: 6, src: '', extraInfo: `
          <p>No matter what it is - training in the gym, via ferrata in Spain, training on the glacier or mutipitch climb</p>
          <p>I can follow the athlete to their stories, or participate in clients trainings and adventures to share the perspective of how it was.</p>
          <p>This is a great opportunity for creating the recap videos, documentary style videos, taking interviews from athletes who
          attended the events or using it for the future promotional materials.</p>
        `, colspan: this.getHorizontalColSpan(), rowspan: 1
        },
        {
          id: 2,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/strongman_ulfr.mp4',
          colspan: 1,
          rowspan: 2
        },
        {
          id: 4,
          src: 'https://samshend-assets.s3.eu-central-1.amazonaws.com/glacier_training_5min.mp4',
          colspan: this.getHorizontalColSpan(),
          rowspan: 1
        }
      ],
    },

    // {
    //   type: 'Sports',
    //   title: 'Sports Videos',
    //   description: 'Capturing the thrill of action-packed sports and athletes. / Telling the stories of athletes with impactful visuals.',
    //   alternateLayout: true,
    //   videos: [
    //     {id: 1, src: '/background-video.mp4', colspan: 1, rowspan: 1},
    //     {id: 2, src: '/why_video.mp4', colspan: this.getHorizontalColSpan(), rowspan: 1},
    //     {id: 3, src: '/background-video.mp4', colspan: 1, rowspan: 2},
    //     {id: 4, src: '/why_video.mp4', colspan: this.getHorizontalColSpan(), rowspan: 2},
    //     {
    //       id: 6, src: '', extraInfo: `
    //     <p>some sport info wadwadawdawadwdwaawd
    //     some sport info wadwadawdawadwdwaawd
    //     some sport info wadwadawdawadwdwaawd
    //     some sport info wadwadawdawadwdwaawd</p>
    //   `, colspan: 1, rowspan: 1
    //     },
    //     {id: 5, src: '/why_video.mp4', colspan: this.getHorizontalColSpan(), rowspan: 2},
    //   ],
    // },

    // {
    //   type: 'Real Estate',
    //   title: 'Real Estate Videos',
    //   description: 'Highlighting properties with an eye for design and storytelling.',
    //   extraInfo: 'This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.',
    //
    //   alternateLayout: true,
    //   videos: [
    //     {id: 1, src: '/background-video.mp4', colspan: 1, rowspan: 1},
    //     {id: 2, src: '/why_video.mp4', colspan: this.getHorizontalColSpan(), rowspan: 1},
    //     {id: 3, src: '/background-video.mp4', colspan: 1, rowspan: 2},
    //     {id: 4, src: '/why_video.mp4', colspan: this.getHorizontalColSpan(), rowspan: 2},
    //     {
    //       id: 5, src: '', extraInfo: `
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //   `, colspan: 1, rowspan: 2
    //     },
    //     {id: 6, src: '/why_video.mp4', colspan: 1, rowspan: 1},
    //   ],
    // },
  ];

  constructor(private sanitizer: DomSanitizer) {
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  applyFilter(filter: string) {
    this.activeFilter = filter;
  }
}
