import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-text-component',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss'],
})
export class TitleTextComponent {
  @Input() titleText: string | undefined = 'title';
}
