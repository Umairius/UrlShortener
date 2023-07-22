import { Module } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';
import { UrlRedirectorModuleController } from './url-redirector.controller';
import { UrlRedirectorService } from './url-redirector.service';
import { UrlSchema } from 'src/Models/url-entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    // Import the UrlReceiverModule
    imports : [MongooseModule.forFeature([{name : 'Url', schema : UrlSchema}])],

    controllers: [UrlRedirectorModuleController],
    providers: [UrlRedirectorService],
    exports: [UrlRedirectorService],
})
export class UrlRedirectorModule {}
