import { Controller, Post, Body, Get, Redirect,Query, Param, ValidationPipe, UsePipes} from '@nestjs/common';
import { UrlReceiverService } from '../url-reciever/url-reciever.service';
import { OnEvent } from '@nestjs/event-emitter';


@Controller('redirect')
export class UrlRedirectorModuleController {
  constructor(private urlReceiverService: UrlReceiverService) {}

  @UsePipes(new ValidationPipe())
  @Get("/:shortUrl")
  handleRedirect(@Param("shortUrl") shortUrl: string) {
    let longUrl = this.urlReceiverService.searchShortUrl(shortUrl);
    console.log("actual url is " + longUrl);
    return {
      url: longUrl
    };
  }
}




