import { Controller, Post, Body, Get,UsePipes,ValidationPipe} from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';
import { UrlDto } from 'src/url.dto';

@Controller('url')
export class UrlReceiverModuleController {
  constructor(private urlReceiverService: UrlReceiverService) {}

  @Post("register")
  @UsePipes(new ValidationPipe())
  
  async createShortUrl(@Body() longUrl: UrlDto) {

    let shortUrl ="https://" + this.urlReceiverService.generateShortUrl(longUrl);
    this.urlReceiverService.searchShortUrl(shortUrl);

    return {
      shortUrl
    };

   

  }
 

  


}
