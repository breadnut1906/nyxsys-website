import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule, RouterLink ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ]
})
export class ContactsComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  contactUs: FormGroup = new FormGroup({
    name: new FormControl(null, [ Validators.required ]),
    company: new FormControl(null, [ Validators.required ]),
    email: new FormControl(null, [ Validators.required ]),
    contact: new FormControl(null, [ Validators.required ]),
    message: new FormControl(null, [ Validators.required ]),
  });
  
  emailAddress: string = 'inquire@nyxsys.ph';
  address: string = 'G/F Paragon Plaza Bldg., 162 EDSA cor. Reliance St., Mandaluyong City, PH';
  phone: string = '(02) 8687 0503 loc. 310';

  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'linkedin' },
  ];

  ngOnInit(): void {
    const elements = document.querySelectorAll('.contact-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })
  }
}