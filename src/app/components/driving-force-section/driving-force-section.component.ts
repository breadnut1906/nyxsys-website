import { Component } from '@angular/core';

@Component({
  selector: 'app-driving-force-section',
  standalone: true,
  imports: [],
  templateUrl: './driving-force-section.component.html',
  styleUrl: './driving-force-section.component.scss'
})
export class DrivingForceSectionComponent {

  drivingForce: any[] = [
    { title: 'INNOVATION', details: 'Pioneering cutting-edge technology in digital media, such as iconic LED billboards and advanced advertising solutions, making Nyxsys a leader in outdoor media.' },
    { title: 'CLIENT-CENTRIC APPROACH', details: `Focusing on delivering tailored solutions that meet the dynamic needs of advertisers and businesses.` },
    { title: 'VISIONARY LEADERSHIP', details: `Empowered by strong leadership that inspires growth, collaboration, and service excellence, driving both innovation and company culture forward.` },
  ]
}
