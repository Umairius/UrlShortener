import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter2 } from 'eventemitter2';
import { UrlDto } from 'src/url.dto';


@Injectable()
export class UrlReceiverService {

  public urlMap: Map<string, string> = new Map<string, string>();

  constructor(private readonly eventEmitter: EventEmitter2) {}

  generateShortUrl(longUrl: UrlDto): string {

    const urlString = longUrl.longUrl.toString();
    const shortId = uuidv4();
    this.urlMap.set(shortId, urlString);
    return shortId;
  }

  searchLongUrl(shortUrl: string): string {
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

  searchShortUrl(uniqueUrl: string): string {
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

