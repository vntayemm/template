import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { RegionModule } from './region/region.module';
import { FeedModule } from './feed/feed.module';
import { CountryModule } from './country/country.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { GeneralStatusModule } from './general-status/general-status.module';
import { BottombarModule } from './bottombar/bottombar.module';
import { ModelsModule } from './models/models.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    RegionModule,
    FeedModule,
    CountryModule,
    UserModule,
    MessageModule,
    GeneralStatusModule,
    BottombarModule,

    ServicesModule,

    ModelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
