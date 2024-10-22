import { Component, HostListener, OnDestroy } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { Subject } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;
  
  destroyed = new Subject<void>();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;  // Set threshold to trigger the background change
  }

  constructor(public utility: UtilityService) {
    utility.isMobile(this.destroyed).subscribe({ next: (value: boolean) => {
      this.isMenuOpen = false;
    }})
  }
  
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
