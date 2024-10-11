import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isSmallScreen: boolean = false;

  constructor(private screenService: ScreenService) {
    this.isSmallScreen = this.screenService.getIsSmallScreen();
  }
}
