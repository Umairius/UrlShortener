import { Controller, Post, Body, Get, Redirect,Query, Param, ValidationPipe, UsePipes, Res} from '@nestjs/common';

import { UrlRedirectorService } from './url-redirector.service';
import { Response } from 'express';


@Controller('redirect')
export class UrlRedirectorModuleController {
  constructor(private urlRedirectorService: UrlRedirectorService) {}

  @UsePipes(new ValidationPipe())
  @Get("/:shortUrl")
  async handleRedirect(@Param("shortUrl") shortUrl: string, @Res() res: Response) {

   try {
    const longUrl = await this.urlRedirectorService.redirectToOriginal(shortUrl);
    if (longUrl) {
      // Redirect the user to the long URL
      return res.redirect(301, longUrl);
    } else {
      // If the short URL is not found, return a 404 Not Found response or any appropriate error response
      return res.status(404).send('Short URL not found');
    }
  } catch (error) {
    // Handle any error that might occur during the redirection process
    return res.status(500).send('An error occurred');
  }
}

    };
  





