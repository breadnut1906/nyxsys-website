import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [ MaterialUiModule, RouterLink ],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {

  emailAddress: string = 'inquire@nyxsys.ph';
  address: string = 'G/F Paragon Plaza Bldg., 162 EDSA cor. Reliance St., Mandaluyong City, PH';
  phone: string = '(02) 8687 0503 loc. 310';
}
