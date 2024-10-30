import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';

@Component({
  selector: 'app-business-solutions',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule, RouterLink ],
  templateUrl: './business-solutions.component.html',
  styleUrl: './business-solutions.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class BusinessSolutionsComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  caseStudies: any[] = [
    { 
      text: 'Globe',
      details: `Nyxsys Philippines provided Globe with a complete digital
        signage solution, from installing high-definition screens
        to seamless software integration and content
        management. Globe’s branches and public spaces were
        transformed with dynamic displays, delivering real-time
        information and interactive experiences, powered by
        Nyxsys' advanced technology.`,
      image: 'assets/images/no-image.jpg'
    },
    { 
      text: 'DHL',
      details: `Nyxsys Philippines constructed a massive LED display
        for DHL. The prominent screen, showcasing DHL’s
        signature yellow and red colors, became a striking
        symbol of the brand’s global presence and reliability,
        enhancing its visibility and impact.`,
      image: 'assets/images/no-image.jpg'
    },
    { 
      text: 'ST. LUKES',
      details: `Nyxsys Philippines successfully supplied, delivered, and
        installed Posterboxes at St. Luke’s Medical Center. These
        high-quality displays provide clear and vibrant visuals,
        enhancing communication and wayfinding within the
        hospital. The seamless installation reflects Nyxsys'
        commitment to delivering reliable, cutting-edge
        solutions tailored to client needs.`,
      image: 'assets/images/no-image.jpg'
    },
    { 
      text: 'Dunkin',
      details: `Nyxsys Philippines facilitated the supply and delivery of
        Vcastplay for Dunkin', enhancing their in-store digital
        signage system. With Vcastplay, Dunkin' can now
        seamlessly manage and update content across
        multiple screens, ensuring vibrant and engaging
        displays for customers. This solution has streamlined
        Dunkin’s digital content delivery, reinforcing their brand
        presence while enhancing the customer experience.`,
      image: 'assets/images/no-image.jpg'
    },
    { 
      text: 'Nissan',
      details: `Nyxsys Philippines successfully completed the supply,
        delivery, and installation of an indoor LED screen for
        Nissan BGC. This high-resolution display enhances the
        showroom experience, showcasing Nissan's latest
        models and promotions with vibrant visuals. The
        seamless integration of the LED screen reflects Nyxsys'
        expertise in delivering state-of-the-art digital signage
        solutions, elevating Nissan BGC's brand presence and
        customer engagement.`,
      image: 'assets/images/no-image.jpg'
    },
    { 
      text: 'Japan Town Ayala Vertis North',
      details: `Nyxsys Philippines, Inc. successfully handled the Supply,
        Delivery, and Installation of an Indoor LED Screen at
        Japan Town, Ayala Vertis North. The vibrant screen
        seamlessly enhances the space, displaying highquality visuals and interactive media, elevating the
        shopping and dining experience for visitors. Nyxsys’
        expertise in cutting-edge digital signage made this
        installation a standout feature, blending modern
        technology with the sleek design of Japan Town.`,
      image: 'assets/images/no-image.jpg'
    },
  ]
  
  config: any = { 
    dots: false, 
    arrows: false,
    autoPlay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  ngOnInit(): void {
    const elements = document.querySelectorAll('.business-solution-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });
  }
}
