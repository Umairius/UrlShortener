import { Controller, Post, Body, Get,UsePipes,ValidationPipe} from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';
import { UrlDto } from 'src/url.dto';

@Controller('url')
export class UrlReceiverModuleController {
  constructor(private urlReceiverService: UrlReceiverService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  
  async createShortUrl(@Body() longUrl: UrlDto) {

    console.log("longUrl: ",longUrl);
    // const shortUrl = this.urlReceiverService.generateShortUrl(longUrl);
    this.urlReceiverService.getMappings();
    return {
      // shortUrl
      duck : "working on it..."
    };
  }
 
  


}
