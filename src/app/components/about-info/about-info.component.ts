import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

@Component({
  selector: 'app-about-info',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.scss'
})
export class AboutInfoComponent {

}
