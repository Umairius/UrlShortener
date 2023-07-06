import { Injectable } from '@nestjs/common';


@Injectable()
export class UrlRedirectorService {
  
  redirectToOriginal(){
    console.log("Here we need to get the original url from the other module")
  }
}
