import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { trigger, transition, style, animate, state, AnimationEvent } from '@angular/animations';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
interface Testimonial {
  name: string,
  image: string;
  text: string;
}

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [MaterialUiModule],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.scss',
  animations: [
    trigger('animateText', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('500ms ease')
      ])
    ]),
    trigger('animateImage', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-100%)' // Slide out to the left
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)' // Slide into position
      })),
      transition('hidden <=> visible', [
        animate('500ms ease-in-out') // Adjust duration as needed
      ])
    ])
  ],
})
export class GraphsComponent implements OnInit {

  @ViewChild(SlickCarouselComponent) slickModal!: SlickCarouselComponent;

  currentIndex: number = 0;
  config: any = {
    autoPlay: true,
    arrows: false,
    dots: false,
    speed: 2000,
    slidesToShow: 3,
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

  testimonials: Testimonial[] = [
    {
      name: 'Graph of dwell time',
      image: 'assets/images/audience measurement/indoor/graph 1.png',
      text: 'Dwell time, the duration shoppers spend viewing advertisements, is a crucial metric for assessing engagement and effectiveness in Nyxsys Mall Posterboxes. Longer dwell times indicate higher audience interest, helping advertisers optimize content with captivating visuals, targeted messaging, and strategic placement in high-traffic areas like food courts or escalators. By leveraging advanced tracking technologies such as motion sensors and audience analytics, Nyxsys provides real-time insights into viewer behavior, enabling data-driven adjustments to boost ad visibility and ROI. This makes Nyxsys Mall Posterboxes a powerful tool for delivering impactful and results-oriented campaigns in bustling mall environments.',
    },
    {
      name: 'Graph of Demographics',
      image: 'assets/images/audience measurement/indoor/graph 2.png',
      text: 'Demographics are key to maximizing the impact of Nyxsys Mall Posterboxes, as they allow advertisers to tailor messages based on audience characteristics like age, gender, income, and lifestyle. Using advanced analytics, Nyxsys gathers real-time data on who interacts with ads, enabling precise targeting and content customization. Malls attract diverse groups, from young professionals and families to students and seniors, making them ideal for reaching multiple market segments. Advertisers can strategically place ads—like tech-focused campaigns near cafes or family-oriented messages near play areas—ensuring higher engagement, better recall, and stronger conversions.',
    },
  ];

  currentState = 'hidden';
  text: string = this.testimonials[this.currentIndex].text;
  name: string = this.testimonials[this.currentIndex].name;
  image: string = this.testimonials[this.currentIndex].image;

  currentValue: Testimonial = this.testimonials[this.currentIndex];

  ngOnInit(): void { }

  onClickPrev() {
    this.slickModal.slickPrev();
  }

  onClickNext() {
    this.slickModal.slickNext();
  }

  onClickChangeTestimonials(direction: number) {
    const index: number = this.currentIndex + direction;
    const length: number = this.testimonials.length;
    this.currentIndex = (index + length) % length;
    this.currentState = 'hidden';
  }

  animationFinished(event: AnimationEvent) {
    if (event.fromState === 'void' && event.toState === 'hidden') {
      this.currentState = 'visible';
    } else if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.text = this.testimonials[this.currentIndex].text;
      this.name = this.testimonials[this.currentIndex].name;
      this.image = this.testimonials[this.currentIndex].image;
      this.currentState = 'visible';
    }
  }
}
