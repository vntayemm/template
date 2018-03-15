import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TemplateProjApiService } from './template-proj-api.service';
import { ValuesService } from './values.service';
import { CryptletContainerService } from './cryptlet-container.service';
import { CryptoDelegateService } from './crypto-delegate.service';
import { CertificateService } from './certificate.service';
import { CryptionService } from './cryption.service';
import { CryptletService } from './cryptlet.service';
import { BlockchainGatewayService } from './blockchain-gateway.service';
import { DataService } from './data.service';
import { IdentityService } from './identity.service';
import { AnalyticsService } from './analytics.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule //this library using for api
  ],
  providers: [
    TemplateProjApiService,
    ValuesService,
    CryptletContainerService,
    CryptoDelegateService,
    CertificateService,
    CryptionService,
    CryptletService,
    BlockchainGatewayService,
    DataService,
    IdentityService,
    AnalyticsService,
  ],
})
export class ServicesModule { 

  constructor(private crypto: CryptoDelegateService) {

  }

  private cryptoDelegate() {

  }

  private cruptlet() {

  }

  private cryptletLookup() {

  }

  private signatureChecking() {

  }

  private transactionSigning() {

  }
}
