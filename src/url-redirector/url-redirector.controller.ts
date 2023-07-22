import { Controller, Post, Body, Get, Redirect,Query, Param, ValidationPipe, UsePipes} from '@nestjs/common';

import { UrlRedirectorService } from './url-redirector.service';


@Controller('redirect')
export class UrlRedirectorModuleController {
  constructor(private urlRedirectorService: UrlRedirectorService) {}

  @UsePipes(new ValidationPipe())
  @Get("/:shortUrl")
  async handleRedirect(@Param("shortUrl") shortUrl: string) {
   console.log(shortUrl)

    let res =  await this.urlRedirectorService.redirectToOriginal(shortUrl);

    return {
      Url: res
    };
    };
  }





