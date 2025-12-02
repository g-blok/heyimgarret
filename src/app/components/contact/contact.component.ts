import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isPopupVisible: boolean = false;
  isSmallScreen = false;
  currentYear: number = new Date().getFullYear();
  constructor(private screenService: ScreenService) {
    this.isSmallScreen = this.screenService.getIsSmallScreen();
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
