import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryComponent } from './country.component';

import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [CountryComponent],
  declarations: [CountryComponent]
})
export class CountryModule { }
