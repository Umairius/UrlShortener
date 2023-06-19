import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UrlReceiverService {
  private urlMap: Map<string, string> = new Map<string, string>();

  generateShortUrl(longUrl: string): string {
    const shortUrl = 'https://midget/' + uuidv4();
    this.urlMap.set(shortUrl, longUrl);
    console.log(this.urlMap)
    return shortUrl;
  }

  getMappings(): { longUrl: string; shortUrl: string }[] {
    const mappings: { longUrl: string; shortUrl: string }[] = [];
    this.urlMap.forEach((longUrl, shortUrl) => {
      mappings.push({ longUrl, shortUrl });
    });
    return mappings;
  }
}
