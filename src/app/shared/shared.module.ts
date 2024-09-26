import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleTextComponent } from '../components/title-text/title-text.component';
import { WaveComponent } from '../components/wave-component/wave.component';

@NgModule({
  declarations: [TitleTextComponent, WaveComponent],
  imports: [CommonModule],
  exports: [TitleTextComponent, WaveComponent],
})
export class SharedModule {}
