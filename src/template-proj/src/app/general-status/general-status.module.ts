import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralStatusComponent } from './general-status.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GeneralStatusComponent],
  declarations: [GeneralStatusComponent]
})
export class GeneralStatusModule { }
