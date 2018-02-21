import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CountryComponent],
  declarations: [CountryComponent]
})
export class CountryModule { }
