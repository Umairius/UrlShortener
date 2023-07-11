import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ShortUrlDto } from 'src/url.dto';


@Injectable()
export class UrlReceiverService {

  public urlMap: Map<string, string> = new Map<string, string>();

  generateShortUrl(UrlObj: ShortUrlDto): string {

    let url = UrlObj.url.toString();
    if (this.searchLongUrl(url)) {
     
      UrlObj.clicks
      console.log("clicks: ",UrlObj.clicks)
      return this.searchLongUrl(url); 
    }


    const shortId = uuidv4();
    this.urlMap.set(shortId, url);
    return shortId;
  }

  
  searchShortUrl(shortUrl: string): string {
    
    console.log("shortUrl: ",shortUrl)
    console.log(this.urlMap)

    if (this.urlMap.has(shortUrl)) {
      console.log("found url")
      console.log(this.urlMap.get(shortUrl))
      return this.urlMap.get(shortUrl);
    }
    console.log("url not found")
    return null;
  }

  searchLongUrl(longUrl: string): string {
    for (const [key, value] of this.urlMap.entries()) {
      console.log(key, value);
      if (value === longUrl) {
        console.log("Found URL");
        return key;
      }
    }
    console.log("URL not found");
    return null;
  }
  

}

