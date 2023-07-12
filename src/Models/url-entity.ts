export class UrlEntity {
    url: string;
    location: string;
    referrer: string;
    clicks: number = 0;
  
    constructor(url: string, location: string, referrer: string) {
      this.url = url;
      this.location = location;
      this.referrer = referrer;
    }
  
    incrementClick() {
      this.clicks++;
      // Additional logic for tracking clicks
    }
  }
  