import { Module } from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';
import { EventEmitterModule } from '@nestjs/event-emitter';


@Module({
  imports : [EventEmitterModule.forRoot()],
  providers : [UrlReceiverService],
  exports : [UrlReceiverService]  
})
export class UrlReceiverModule {}
