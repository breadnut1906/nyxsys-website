import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

}
