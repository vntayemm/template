import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RecentUserComponent } from './recent-user/recent-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UserComponent, RecentUserComponent],
  declarations: [UserComponent, RecentUserComponent]
})
export class UserModule { }
