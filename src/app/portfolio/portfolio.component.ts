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
  filters = ['All', 'Nature', 'Sports', 'Documentary', 'Real Estate'];
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
        {id: 2, src: '/background-video.mp4', colspan: this.getHorizontalColSpan(), rowspan: 1},
        {id: 1, src: '/night_sky_insta.mp4', colspan: 1, rowspan: 2},
        {id: 3, src: '/Youtube_Nature_Short.mp4', colspan: 1, rowspan: 2},
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
    // {
    //   type: 'Sports',
    //   title: 'Sports Videos',
    //   description: 'Capturing the thrill of action-packed sports and athletes.',
    //   alternateLayout: true,
    //   videos: [
    //     {id: 1, src: '/background-video.mp4', colspan: 1, rowspan: 1},
    //     {id: 2, src: '/why_video.mp4', colspan: 2, rowspan: 1},
    //     {id: 3, src: '/background-video.mp4', colspan: 1, rowspan: 2},
    //     {id: 4, src: '/why_video.mp4', colspan: 2, rowspan: 2},
    //     {
    //       id: 6, src: '', extraInfo: `
    //     <p>some sport info wadwadawdawadwdwaawd
    //     some sport info wadwadawdawadwdwaawd
    //     some sport info wadwadawdawadwdwaawd
    //     some sport info wadwadawdawadwdwaawd</p>
    //   `, colspan: 1, rowspan: 1
    //     },
    //     {id: 5, src: '/why_video.mp4', colspan: 2, rowspan: 2},
    //   ],
    // },
    // {
    //   type: 'Documentary',
    //   title: 'Documentary Videos',
    //   description: 'Telling real stories with impactful visuals and soundscapes.',
    //   alternateLayout: false,
    //   videos: [
    //     {id: 1, src: '/why_video.mp4', colspan: 2, rowspan: 1},
    //     {id: 2, src: '/background-video.mp4', colspan: 1, rowspan: 2},
    //     {id: 3, src: '/why_video.mp4', colspan: 1, rowspan: 1},
    //     {id: 4, src: '/background-video.mp4', colspan: 2, rowspan: 2},
    //     {id: 5, src: '/background-video.mp4', colspan: 1, rowspan: 1},
    //     {
    //       id: 6, src: '', extraInfo: `
    //     <p>This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.</p>
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //     This section highlights the serene beauty of nature, showcasing lush landscapes and peaceful vistas.
    //   `, colspan: 2, rowspan: 1
    //     },
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
    //     {id: 2, src: '/why_video.mp4', colspan: 2, rowspan: 1},
    //     {id: 3, src: '/background-video.mp4', colspan: 1, rowspan: 2},
    //     {id: 4, src: '/why_video.mp4', colspan: 2, rowspan: 2},
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
