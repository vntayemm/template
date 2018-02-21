import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottombarComponent } from './bottombar.component';
import { DummyData } from '../models/dummy-data';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [BottombarComponent],
  declarations: [BottombarComponent]
})
export class BottombarModule { }
