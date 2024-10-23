import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
