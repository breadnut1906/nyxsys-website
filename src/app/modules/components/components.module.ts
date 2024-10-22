import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutInfoComponent } from '../../components/about-info/about-info.component';
import { DrivingForceSectionComponent } from '../../components/driving-force-section/driving-force-section.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    AboutInfoComponent,
    DrivingForceSectionComponent,
    CompaniesComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    AboutInfoComponent,
    DrivingForceSectionComponent,
    CompaniesComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
