import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ShortUrlDto } from 'src/DTOs/url.dto';
import { UrlEntity } from 'src/Models/url-entity';
import { url } from 'inspector';


@Injectable()
export class UrlReceiverService {

  public UrlMap: Map<string, UrlEntity> = new Map<string, UrlEntity>();


  initializeUrl(UrlObj: ShortUrlDto){
    const urlEntity = new UrlEntity(UrlObj.url, UrlObj.location, UrlObj.referrer);
    const longUrl = urlEntity.url.toString();

    if (this.UrlMap.has(this.searchLongUrl(longUrl))) {
      for (const [key, obj] of this.UrlMap.entries()) {
        if(obj.url == longUrl){
          obj.incrementClick();
          return key;
        }

      }
    }
    else{
      return this.generateShortUrl(urlEntity);
    }

  } 


  generateShortUrl(urlEntity: UrlEntity): string {

    let url = urlEntity.url.toString();

    if (this.searchLongUrl(url)) {
      return this.searchLongUrl(url); 
    }

    const shortId = uuidv4();
    this.UrlMap.set(shortId, urlEntity);

    return shortId;
  }

  
  searchShortUrl(shortUrl: string): string {
    
    console.log("shortUrl: ",shortUrl)
    console.log(this.UrlMap)

    if (this.UrlMap.has(shortUrl)) {
  
      return this.UrlMap.get(shortUrl).url;
    }
    console.log("url not found")
    return null;
  }

  searchLongUrl(longUrl: string): string {
    for (const [key, value] of this.UrlMap) {
      console.log(key, value);
      if (value.url === longUrl) {
        console.log("Found URL");
        return key;
      }
    }
    console.log("URL not found");
    return null;
  }
  

}

