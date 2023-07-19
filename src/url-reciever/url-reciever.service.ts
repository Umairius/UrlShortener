import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ShortUrlDto } from 'src/DTOs/url.dto';
import { Url} from 'src/Models/url-entity';
import { url } from 'inspector';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';



@Injectable()
export class UrlReceiverService {

  // public UrlMap: Map<string, UrlEntity> = new Map<string, UrlEntity>();

  constructor(@InjectModel('Url') private readonly urlEntity: Model<Url>) {}




  async createShortUrl(UrlObj: ShortUrlDto): Promise<string> {
    const shortUrl = uuidv4();
    console.log(UrlObj.url)
    const url = new this.urlEntity({
      shortUrl: shortUrl,
      longUrl: UrlObj.url,
      location: UrlObj.location,
      referrer: UrlObj.referrer,
      clicks: 0,
    });
  
    return new Promise((resolve, reject) => {
      url.save()
        .then(() => {
          console.log("saved")
          resolve(shortUrl);
        })
        .catch((error) => {
          console.log("error")
          reject(error);
        });
    });
  }
  

}

