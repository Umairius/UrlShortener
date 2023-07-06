import { Controller, Post, Body, Get} from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';

@Controller('url')
export class UrlReceiverModuleController {
  constructor(private urlReceiverService: UrlReceiverService) {}

  @Post()
  async createShortUrl(@Body() longUrl: string) {
    const shortUrl = this.urlReceiverService.generateShortUrl(longUrl);
    this.urlReceiverService.getMappings();
    return {
      shortUrl
    };
  }
 
  


}
