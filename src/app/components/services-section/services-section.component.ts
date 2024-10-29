import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ MaterialUiModule, RouterLink ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      // transition('visible => hidden', animate('600ms ease-in')),
    ]),
  ],
})
export class ServicesSectionComponent {

  isVisible: boolean[] = [ false, false, false, false ];

  services: any[] = [
    {
      title: 'LED MEDIA INVENTORIES',
      description: 'Comprehensive collection of highperformance LED display systems designed to meet diverse marketing and advertising needs.',
      image: 'assets/images/led/iconic.png',
      routerLink: '/services/led-media-inventories'
    },
    {
      title: 'STATIC FIXED INVENTORIES',
      description: `Range of non-digital, high-quality static advertising solutions that are designed to deliver long-lasting, impactful brand messaging.`,
      image: 'assets/images/static/edsa northbound static billboard.png',
      routerLink: '/services/static-fixed-inventories'
    },
    {
      title: 'BUSINESS INNOVATIVE SOLUTIONS & SERVICES',
      description: `Deliver dynamic, high-definition displays tailored for impactful advertising and realtime content updates across various industries.`,
      image: 'assets/images/business solutions/globe.png',
      routerLink: '/services/business-innovative-solutions'
    },
    {
      title: 'AUDIENCE MEASUREMENT',
      description: `Advanced data and analytics platform that empowers businesses with actionable insights derived from real-time data monitoring and analysis.`,
      image: 'assets/images/audience measurement/indoor mall audience measurement 1.png',
      routerLink: '/services/audience-measurement'
    }
  ]
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.service-item');      
    
    elements.forEach((element, index) => {  
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setTimeout(() => (this.isVisible[index] = true), index * 300); // 300ms delay for each div
      }
    })
  }
}
