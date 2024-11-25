import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-business-solutions',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
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

  @ViewChild(SlickCarouselComponent) slickModalCaseStudies!: SlickCarouselComponent;

  isVcastPlaying: boolean = false;
  isVisible: boolean[] = [ false, false ];

  caseStudies: any[] = [
    { 
      text: 'Globe Telecom',
      details: `Nyxsys Philippines provided Globe with a complete digital
        signage solution, from installing high-definition screens
        to seamless software integration and content
        management. Globe’s branches and public spaces were
        transformed with dynamic displays, delivering real-time
        information and interactive experiences, powered by
        Nyxsys' advanced technology.`,
      image: 'assets/images/business solutions/case studies/globe.jpg'
    },
    { 
      text: 'DHL Warehouse',
      details: `Nyxsys Philippines constructed a massive LED display
        for DHL. The prominent screen, showcasing DHL’s
        signature yellow and red colors, became a striking
        symbol of the brand’s global presence and reliability,
        enhancing its visibility and impact.`,
      image: 'assets/images/business solutions/case studies/dhl.jpg'
    },
    { 
      text: 'ST. Lukes Medical',
      details: `Nyxsys Philippines successfully supplied, delivered, and
        installed Posterboxes at St. Luke’s Medical Center. These
        high-quality displays provide clear and vibrant visuals,
        enhancing communication and wayfinding within the
        hospital. The seamless installation reflects Nyxsys'
        commitment to delivering reliable, cutting-edge
        solutions tailored to client needs.`,
      image: 'assets/images/business solutions/case studies/st lukes.jpg'
    },
    { 
      text: 'Dunkin Menu Boards',
      details: `Nyxsys Philippines facilitated the supply and delivery of
        Vcastplay for Dunkin', enhancing their in-store digital
        signage system. With Vcastplay, Dunkin' can now
        seamlessly manage and update content across
        multiple screens, ensuring vibrant and engaging
        displays for customers. This solution has streamlined
        Dunkin’s digital content delivery, reinforcing their brand
        presence while enhancing the customer experience.`,
      image: 'assets/images/business solutions/case studies/dunkin.jpg'
    },
    { 
      text: 'Nissan Dealer Showroom',
      details: `Nyxsys Philippines successfully completed the supply,
        delivery, and installation of an indoor LED screen for
        Nissan BGC. This high-resolution display enhances the
        showroom experience, showcasing Nissan's latest
        models and promotions with vibrant visuals. The
        seamless integration of the LED screen reflects Nyxsys'
        expertise in delivering state-of-the-art digital signage
        solutions, elevating Nissan BGC's brand presence and
        customer engagement.`,
      image: 'assets/images/business solutions/case studies/nissan.jpg'
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
      image: 'assets/images/business solutions/case studies/japan town ayala vertis north.jpg'
    },
  ];

  hardwares: any[] = [
    {
      text: 'Indoor Interactive Touch KIOSK (IK140)',
      image: 'assets/images/business solutions/end to end/INDOOR-INTERACTIVE-TOUCH-KIOSK-IK140.jpg'
    },
    {
      text: 'Menu Board',
      image: 'assets/images/business solutions/end to end/menu board.jpg'
    },
    {
      text: 'Digital Window Display',
      image: 'assets/images/business solutions/end to end/Uniview-digital-window-display.jpg'
    },
    {
      text: 'Indoor Digital Signage (AL19900)',
      image: 'assets/images/business solutions/end to end/Uniview-indoor-digital-signage-AL1900.jpg'
    },
    {
      text: 'Video Wall',
      image: 'assets/images/business solutions/end to end/Uniview-Video-wall.jpg'
    },
  ]

  e2eSolutions: any[] = [
    {
      text: 'Versatile Digital Signage System',
      details: 'With vcastplay, business owners can creatively display multimedia content like images, videos and websites dynamic marketing',
      image: 'assets/icons/versatile.png'
    },
    {
      text: 'Content Management Made Efficient',
      details: 'Vcastplay lets business owners create ad template, schedule airing and customize digital singnage to fit their business needs.',
      image: 'assets/icons/cms.png'
    },
    {
      text: 'Accessible Easy To Access',
      details: 'Vcastplay is a cloud-based digital signage system that lets business owners manage multiple players remotely with internet access, anytime, anywhere',
      image: 'assets/icons/access.png'
    },
    {
      text: 'Support Customer Service',
      details: 'Customer satisfaction is our priority. Our expert technical team is always available to assist with any digital signage issues',
      image: 'assets/icons/support.png'
    },
    {
      text: 'Timely Reports',
      details: 'Vcastplay offers real-time tracking and monitoring reports to ensure your digital signage is running smoothly.',
      image: 'assets/icons/timely.png'
    },
  ];

  postServices: any[] = [
    {
      text: 'Social Media',
      details: 'Handles social media content from planning to performance analysis, ensuring engaging and relevant posts that build your digital presence.',
      image: 'assets/images/business solutions/post services/social media.jpg'
    },
    {
      text: 'Creative Creation',
      details: 'Manages the creative process, delivering eye-catching visuals and content that align with your brand and elevate your marketing efforts.',
      image: 'assets/images/business solutions/post services/creatives creation.jpg'
    },
    {
      text: 'Playlist Uploading',
      details: 'Ensures seamless playlist uploading and scheduling across platforms, making our audio and video content available to your audience effortlessly.',
      image: 'assets/images/business solutions/post services/playlist uploading.jpg'
    },
  ]
  
  config: any = { 
    dots: false, 
    arrows: false,
    autoPlay: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true, 
    centerMode: true,
    centerPadding: '60px',
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
  
  onClickPrev() {
    this.slickModalCaseStudies.slickPrev();
  }

  onClickNext() {
    this.slickModalCaseStudies.slickNext();
  }

  onClickPlay() {
    const video: any = document.getElementById('vcastplay');
    video.play();
    this.isVcastPlaying = true;
  }
}
