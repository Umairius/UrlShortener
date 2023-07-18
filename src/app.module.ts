import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlReceiverModuleController } from './url-reciever/url-reciever.controller';
import { UrlReceiverService } from './url-reciever/url-reciever.service';
import { UrlRedirectorModuleController } from './url-redirector/url-redirector.controller';
import { UrlReceiverModule } from './url-reciever/url-reciever.module';
import { UrlRedirectorModule } from './url-redirector/url-redirector.module';
import {MongooseModule} from '@nestjs/mongoose';
// import { Url, UrlSchema } from './Models/url-entity';


@Module({  
  imports: [ UrlReceiverModule,UrlRedirectorModule,MongooseModule.forRoot(
    'mongodb+srv://umair:root@experiment.vbu8fde.mongodb.net/?retryWrites=true&w=majority'
  )],
  controllers: [AppController, UrlReceiverModuleController,UrlRedirectorModuleController],
providers: [AppService],
})
export class AppModule {}
