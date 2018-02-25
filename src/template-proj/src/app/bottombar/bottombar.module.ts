import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BottombarComponent } from './bottombar.component';
import { DummyData } from '../models/dummy-data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BottombarComponent],
  declarations: [BottombarComponent]
})
export class BottombarModule { }
