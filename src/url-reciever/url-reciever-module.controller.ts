import { Controller, Post, Body, Get,UsePipes,ValidationPipe} from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';
import { ShortUrlDto } from 'src/DTOs/url.dto';
import { UrlEntity } from 'src/Models/url-entity';
import {inspect } from 'util';
import { url } from 'inspector';

@Controller('url')
export class UrlReceiverModuleController {
  constructor(private urlReceiverService: UrlReceiverService) {}

  @Post("register")
  @UsePipes(new ValidationPipe())
  
  

  async createShortUrl(@Body() UrlObj: ShortUrlDto) {
    
    let shortUrl ="https://" + this.urlReceiverService.initializeUrl(UrlObj);

    return {
      shortUrl
    };

   

  }
 

  


}
