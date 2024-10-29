import { Component, HostListener, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
    trigger('slideInLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
    trigger('slideInRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ])
  ],
})
export class AboutComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  isVisibleHistroy: boolean = false;
  isVisibleMission: boolean = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight; 
    const history: any = document.querySelector('.history-container');
    const mission: any = document.querySelector('.mission-container');
 
    const historyRect = history.getBoundingClientRect();
    const missionRect = mission.getBoundingClientRect();

    if (historyRect.top <= windowHeight && historyRect.bottom >= 0) {
      setTimeout(() => this.isVisibleHistroy = true, 200);
    }  
    
    if (missionRect.top <= windowHeight && missionRect.bottom >= 0) {
      setTimeout(() => this.isVisibleMission = true, 200);
    }  
  }
  
  ngOnInit(): void {
    const elements = document.querySelectorAll('.about-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })
  }
}
