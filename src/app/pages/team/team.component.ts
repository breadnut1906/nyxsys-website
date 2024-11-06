import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ]
})
export class TeamComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  ngOnInit(): void {
    const elements = document.querySelectorAll('.team-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })
  }
}
