import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from '../contact/contact.component';
import { TechnologyPopupComponent } from '../technology-popup/technology-popup.component';

@NgModule({
  declarations: [ContactComponent, TechnologyPopupComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ContactComponent],
})
export class ContactModule {}
