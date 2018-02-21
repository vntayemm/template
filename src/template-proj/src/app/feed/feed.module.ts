import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FeedComponent],
  declarations: [FeedComponent]
})
export class FeedModule { }
