import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

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
      image: 'assets/images/audience measurement/indoor/indoor mall audience measurement 1.png',
      routerLink: '/services/audience-measurement'
    }
  ]

  constructor(private breakPointObserver: BreakpointObserver) { }
  
  isMobile(destroyed: Subject<void>): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.breakPointObserver
        .observe([ Breakpoints.XSmall, Breakpoints.Small ])
        .pipe(takeUntil(destroyed))
        .subscribe((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              observer.next(true);
              return;
            }
          }
          observer.next(false);
      });
    });
  }
}
