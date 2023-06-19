import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlReceiverModuleController } from './url-reciever-module/url-reciever-module.controller';
import { UrlReceiverService } from './url-reciever-module/url-reciever.service';

@Module({
  imports: [],
  controllers: [AppController, UrlReceiverModuleController],
  providers: [AppService, UrlReceiverService],
})
export class AppModule {}
