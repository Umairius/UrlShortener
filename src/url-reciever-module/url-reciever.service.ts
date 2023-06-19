import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlReceiverService {
  generateShortUrl(longUrl: string): string {
    // Implement your URL shortening logic here
    // Generate a short URL based on the long URL
    const shortUrl = 'https://your-domain.com/short-url';

    return shortUrl;
  }
}
