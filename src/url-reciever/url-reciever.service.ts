import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter2 } from 'eventemitter2';


@Injectable()
export class UrlReceiverService {
  
  public urlMap: Map<string, string> = new Map<string, string>();

  constructor(private readonly eventEmitter: EventEmitter2) {}

  generateShortUrl(longUrl: string): string {
    const shortUrl = 'https://midget/' + uuidv4();
    this.urlMap.set(shortUrl, longUrl);
    this.eventEmitter.emit("UrlMapUpdated", this.urlMap)
    
    console.log("Event emitted")
    return shortUrl;
  }

  getMappings(): { longUrl: string; shortUrl: string }[] {
    const mappings: { longUrl: string; shortUrl: string }[] = [];
    this.urlMap.forEach((longUrl, shortUrl) => {
      mappings.push({ longUrl, shortUrl });
    });
    console.log("Ground Truth: ",this.urlMap)
    return mappings;
  }
}

