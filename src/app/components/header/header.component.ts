import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  isSmallScreen = false;

  constructor(private screenService: ScreenService) {
    this.isSmallScreen = this.screenService.getIsSmallScreen();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
