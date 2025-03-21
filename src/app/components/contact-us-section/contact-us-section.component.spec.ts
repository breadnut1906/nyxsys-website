import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsSectionComponent } from './contact-us-section.component';

describe('ContactUsSectionComponent', () => {
  let component: ContactUsSectionComponent;
  let fixture: ComponentFixture<ContactUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
