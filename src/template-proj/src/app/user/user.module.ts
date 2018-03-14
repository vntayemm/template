import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RecentUserComponent } from './recent-user/recent-user.component';
import { NotifybarComponent } from './notifybar/notifybar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UserComponent, RecentUserComponent, NotifybarComponent],
  declarations: [UserComponent, RecentUserComponent, NotifybarComponent]
})
export class UserModule { }
