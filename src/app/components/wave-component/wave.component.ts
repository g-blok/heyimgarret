import { Component, Input } from '@angular/core';

@Component({
  selector: 'wave-component',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss'],
})
export class WaveComponent {
  @Input() location: string = 'top';

  constructor() {}
}
