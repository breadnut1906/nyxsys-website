import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
interface Testimonial {
  name: string;
  position: string;
  message: string;
}
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  config: any = { dots: true, infinite: true, speed: 300, slidesToShow: 1, slidesToScroll: 1, autoplay: true };

  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      position: 'CEO, Company A',
      message: 'This product changed my life!',
    },
    {
      name: 'Jane Smith',
      position: 'CTO, Company B',
      message: 'Absolutely fantastic service and support.',
    },
    {
      name: 'Emily Johnson',
      position: 'Designer, Company C',
      message: 'I would highly recommend this to anyone!',
    },
  ];
}
