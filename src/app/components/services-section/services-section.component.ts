import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ MaterialUiModule, RouterLink ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {

  services: any[] = [
    {
      title: 'LED MEDIA INVENTORIES',
      description: 'Comprehensive collection of highperformance LED display systems designed to meet diverse marketing and advertising needs.',
      image: 'assets/images/led/iconic.png',
      routerLink: '/services/led'
    },
    {
      title: 'STATIC FIXED INVENTORIES',
      description: `Range of non-digital, high-quality static advertising solutions that are designed to deliver long-lasting, impactful brand messaging.`,
      image: 'assets/images/static/edsa northbound static billboard.png',
      routerLink: '/services/static'
    },
    {
      title: 'BUSINESS INNOVATIVE SOLUTIONS & SERVICES',
      description: `Deliver dynamic, high-definition displays tailored for impactful advertising and realtime content updates across various industries.`,
      image: 'assets/images/business solutions/globe.png',
      routerLink: '/services/business-solution'
    },
    {
      title: 'AUDIENCE MEASUREMENT',
      description: `Advanced data and analytics platform that empowers businesses with actionable insights derived from real-time data monitoring and analysis.`,
      image: 'assets/images/audience/indoor mall audience measurement 1.png',
      routerLink: '/services/audience'
    }
  ]
}
