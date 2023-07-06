import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlReceiverModuleController } from './url-reciever/url-reciever-module.controller';
import { UrlReceiverService } from './url-reciever/url-reciever.service';
import { UrlRedirectorModuleController } from './url-redirector/url-redirector.controller';
import { EventEmitter2 } from 'eventemitter2';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UrlReceiverModule } from './url-reciever/url-reciever.module';
import { UrlRedirectorModule } from './url-redirector/url-redirector.module';



@Module({  
  imports: [EventEmitterModule.forRoot(), UrlReceiverModule,UrlRedirectorModule,],
  controllers: [AppController, UrlReceiverModuleController,UrlRedirectorModuleController],
providers: [AppService, UrlReceiverService, EventEmitter2],
})
export class AppModule {}
