import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-audience-measurement',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './audience-measurement.component.html',
  styleUrl: './audience-measurement.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class AudienceMeasurementComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  ngOnInit(): void {
    const elements = document.querySelectorAll('.audience-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });
  }
}
