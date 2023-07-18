import { Module } from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlSchema } from 'src/Models/url-entity';

@Module({
  imports : [MongooseModule.forFeature([{name : 'Url', schema : UrlSchema}])],
  providers : [UrlReceiverService],
  exports : [UrlReceiverService]  
})
export class UrlReceiverModule {}
