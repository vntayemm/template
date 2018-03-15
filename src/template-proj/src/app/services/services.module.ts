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
import { BlockchainWalletService } from './blockchain-wallet.service';
import { PaymentsService } from './payments.service';
import { ReceivePaymentsService } from './receive-payments.service';
import { BitcoinPaymentService } from './bitcoin-payment.service';
import { EthereumPaymentService } from './ethereum-payment.service';
import { MailService } from './mail.service';
import { SmsService } from './sms.service';
import { ChatService } from './chat.service';
import { VoiceService } from './voice.service';
import { LivecameService } from './livecame.service';

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

    BlockchainWalletService,
    PaymentsService,
    ReceivePaymentsService,
    BitcoinPaymentService,
    EthereumPaymentService,

    MailService,
    SmsService,
    ChatService,
    VoiceService,
    LivecameService,
    
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
