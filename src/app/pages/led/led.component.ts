import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-led',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule, RouterLink ],
  templateUrl: './led.component.html',
  styleUrl: './led.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class LedComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  ledInventories: any[] = [
    { 
      text: 'ICONIC - EDSA ORENSE LED (SOUTH BOUND)',
      address: '447 Magsaysay Avenue, Guadalupe Nuevo, Makati City',
      size: '80FT (H) x 140FT (W)',
      image: 'assets/images/led/led inventories/iconic.png'
    },
    { 
      text: 'EDSA PARAGON LED (NORTHBOUND)',
      address: 'Ad wall of Paragon Plaza Bldg, 162 EDSA corner Reliance St., Mandaluyong City',
      size: '70FT (H) x 60FT (W)',
      image: 'assets/images/led/led inventories/paragon.png'
    },
    { 
      text: 'C5 MARKET MARKET LED (NORTHBOUND)',
      address: '447 Magsaysay Avenue, Guadalupe Nuevo, Makati City 80FT',
      size: '30FT (H) x 80FT (W)',
      image: 'assets/images/led/led inventories/market market.png'
    },
  ]

  mallPosterboxes: any[] = [
    {
      text: 'Glorietta',
      items: [
        { text: 'Glorietta 4, Drop-off Entrance', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta 3 Drop-off, in front of Steel Parking', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta 1 Entrance in front of SM', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta 4, Near Activity Center', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta 2, Ground fl. Entrance near Holiday Inn', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta, Entrance in front of Landmark', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta 1, Near True Value', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta 4, 2nd fl. beside Havaianas', image: 'assets/images/no-image.jpg' },
        { text: 'Glorietta 4, Activity Center, Beside Mcdonalds', image: 'assets/images/no-image.jpg' },
      ]
    }, 
    {
      text: 'UP Town Center',
      items: [
        { text: 'Phase 1 Building in front of Mercado Supermarket', image: 'assets/images/no-image.jpg' },
        { text: 'Phase 1 Building in front of National Bookstore', image: 'assets/images/no-image.jpg' },
        { text: 'Phase 1 Building exit beside Pepper Lunch', image: 'assets/images/no-image.jpg' },
        { text: 'Phase 2 Building 2F in front of Dotonbori', image: 'assets/images/no-image.jpg' },
        { text: 'Phase 2 Building entrance near Uniqlo', image: 'assets/images/no-image.jpg' },
        { text: 'Phase 1 Building, 2nd flr. beside Sbarro', image: 'assets/images/no-image.jpg' },
      ]
    },
    {
      text: 'Trinoma',
      items: [
        { text: 'Level 1, Activity Center near Mister Donut', image: 'assets/images/no-image.jpg' },
        { text: 'Level 2, Near Shoe Salon', image: 'assets/images/no-image.jpg' },
        { text: 'Level 2, Entrance near Bench Fix', image: 'assets/images/no-image.jpg' },
        { text: 'Level 2, Food Choices 2', image: 'assets/images/no-image.jpg' },
        { text: 'Ground Level, North Car Park Drop Off', image: 'assets/images/no-image.jpg' },
        { text: 'Level 2, Food Choices', image: 'assets/images/no-image.jpg' },
        { text: 'Level 3, Near Mango', image: 'assets/images/no-image.jpg' },
      ]
    },
    {
      text: 'Market Market',
      items: [
        { text: '2nd Floor in front of MoshiKoshi', image: 'assets/images/no-image.jpg' },
        { text: '1st floor Activity Center in front of Levi’s', image: 'assets/images/no-image.jpg' },
        { text: 'Ground Floor beside elevator in front of National Bookstore', image: 'assets/images/no-image.jpg' },
        { text: 'Drop-off, Entrance from Terminal', image: 'assets/images/no-image.jpg' },
      ]
    }
  ]

  ngOnInit(): void {
    const elements = document.querySelectorAll('.led-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });
  }
}
