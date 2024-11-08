import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
interface Testimonial {
  name: string,
  image: string;
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

  config: any = { 
    autoPlay: true,
    arrows: false,
    dots: true, 
    speed: 2000,
    infinite: true,
  };

  testimonials: Testimonial[] = [
    {
      name: 'New Balance',
      image: 'assets/images/testimonials/new balance.png',
      message: `Calton Datx enables us to measure the impact of our billboard campaigns, providing valuable insights that help us assess the effectiveness of our investment.`,
    },
    {
      name: 'IPG Media Brands',
      image: 'assets/images/testimonials/ipg media brands.png',
      message: `Calton Datx is important for us because when we recommend sites to clients, they often request additional data—especially traffic data—to  valuate if their investment is worthwhile. It helps us demonstrate the visibility of a site to the mass market by providing accurate and compelling numbers. What sets Calton Datx apart is its up-to-date data, unlike other sources that rely on MMDA figures, which are typically updated only once a year.`,
    },
    {
      name: 'Dentsu',
      image: 'assets/images/testimonials/dentsu.png',
      message: `Significance for me is the Indoor Report, it's a niche set of data that helps us to understand the demographics more. I have not met any data providers as detailed as Calton Datx.`,
    },
    {
      name: 'Spark',
      image: 'assets/images/testimonials/spark.png',
      message: `Calton DATx supports our campaigns by delivering the key metrics for outof-home advertising: traffic count and impressions, which are  rucial for measuring campaign effectiveness.`,
    },
    {
      name: 'UNILAB',
      image: 'assets/images/testimonials/unilab.png',
      message: `Calton DATx helps in our post campaign report to gauge efficiency of the sites.`,
    },
    {
      name: 'The huddle Room',
      image: 'assets/images/testimonials/the huddle room.png',
      message: `Calton DATx is highly beneficial to outof-home advertising, providing detailed data and specific figures for targeted areas, helping us make more informed decisions.`,
    },
  ];
}
