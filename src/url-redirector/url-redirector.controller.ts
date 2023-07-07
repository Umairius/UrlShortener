import { Controller, Post, Body, Get, Redirect,Query} from '@nestjs/common';
import { UrlReceiverService } from '../url-reciever/url-reciever.service';
import { OnEvent } from '@nestjs/event-emitter';


@Controller('redirect')
export class UrlRedirectorModuleController {
constructor(private urlReceiverService: UrlReceiverService) {
  console.log("class initialized");

}

  @Get()
  endPointHit(){
    console.log("end point hit");
    return { url: 'https://www.google.com' };
  }


  @Post()
  checkNewUrl(@Query('uuid') uuid: string){
    console.log("uuid: ",uuid);
    console.log(this.urlReceiverService.urlMap);
  }
 
  // @Post()
  // handlePost(){

    // console.log(this.urlReceiverService.urlMap);
    
  // }

  // @OnEvent('UrlMapUpdated')
  // handleUpdate(payload: { urlMap: Map<string, string> }) {
  // const urlMap = payload.urlMap;
  // console.log(urlMap);
}


