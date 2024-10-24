import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { DrivingForceSectionComponent } from '../../components/driving-force-section/driving-force-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    AboutSectionComponent,
    DrivingForceSectionComponent,
    ServicesSectionComponent,
    CompaniesComponent,
    TestimonialsComponent,
    CallToActionComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    AboutSectionComponent,
    DrivingForceSectionComponent,
    ServicesSectionComponent,
    CompaniesComponent,
    TestimonialsComponent,
    CallToActionComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
