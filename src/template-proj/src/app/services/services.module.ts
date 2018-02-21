import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TemplateProjApiService } from './template-proj-api.service';
import { ValuesService } from './values.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TemplateProjApiService, ValuesService],
})
export class ServicesModule { }
