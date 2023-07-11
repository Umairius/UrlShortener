import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UrlDto } from 'src/url.dto';


@Injectable()
export class UrlReceiverService {

  public urlMap: Map<string, string> = new Map<string, string>();

  generateShortUrl(longUrl: UrlDto): string {

    //unpack the longUrl
    let url = longUrl.longUrl.toString();
    if (this.searchLongUrl(url)) {
      console.log("url already exists")
      return this.searchLongUrl(url);
      
    }
    const urlString = longUrl.longUrl.toString();
    const shortId = uuidv4();
    this.urlMap.set(shortId, urlString);
    return shortId;
  }

  searchShortUrl(shortUrl: string): string {
    let uniqueUrl = shortUrl.slice(8, shortUrl.length)
    console.log("uniqueUrl: ",uniqueUrl)
    console.log(this.urlMap)

    if (this.urlMap.has(uniqueUrl)) {
      console.log("found url")
      console.log(this.urlMap.get(uniqueUrl))
      return this.urlMap.get(uniqueUrl);
    }
    console.log("url not found")
    return null;
  }

  searchLongUrl(uniqueUrl: string): string {
    for (const [key, value] of this.urlMap.entries()) {
      if (value === uniqueUrl) {
        console.log("Found URL");
        return key;
      }
    }
    console.log("URL not found");
    return null;
  }
  

}

