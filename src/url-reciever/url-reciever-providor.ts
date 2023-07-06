import { Injectable } from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';

@Injectable()
export class UrlMappingProvider {
  constructor(private urlReceiverService: UrlReceiverService) {}

  getMappings(): { longUrl: string; shortUrl: string }[] {
    return this.urlReceiverService.getMappings();
  }
}
