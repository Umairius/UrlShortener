import { Controller, Post, Body, Get,UsePipes,ValidationPipe} from '@nestjs/common';
import { UrlReceiverService } from './url-reciever.service';
import { ShortUrlDto } from 'src/DTOs/url.dto';


@Controller('url')
export class UrlReceiverModuleController {
  
  constructor(private urlReceiverService: UrlReceiverService) {}

  @Post("register")
  @UsePipes(new ValidationPipe())
  
  

  async createShortUrl(@Body() UrlObj: ShortUrlDto) {




    // let shortUrl ="https://" + this.urlReceiverService.generateShortUrl(UrlObj);

    // return {
    //   shortUrl
    // };

   

  }
 

  


}
