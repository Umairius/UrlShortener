import { Module } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';
import { UrlRedirectorModuleController } from './url-redirector.controller';
import { UrlRedirectorService } from './url-redirector.service';
import { UrlReceiverService } from 'src/url-reciever/url-reciever.service';
import { UrlReceiverModule } from 'src/url-reciever/url-reciever.module';


@Module({
    imports: [UrlReceiverModule], // Import the UrlReceiverModule
    controllers: [UrlRedirectorModuleController],
})
export class UrlRedirectorModule {}
