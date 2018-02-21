import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { RegionModule } from './region/region.module';
import { FeedModule } from './feed/feed.module';
import { CountryModule } from './country/country.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { GeneralStatusModule } from './general-status/general-status.module';
import { ServicesModule } from './services/services.module';

import { ValuesService } from './services/values.service';
import { TemplateProjApiService } from './services/template-proj-api.service';


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
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
