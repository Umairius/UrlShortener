import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ShortUrlDto } from 'src/DTOs/url.dto';
import { Url} from 'src/Models/url-entity';
import { url } from 'inspector';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as shortid from 'shortid';


import Redis from 'ioredis';

// const redisClient = new Redis('redis://redis:6379');
const redisClient = new Redis();

@Injectable()
export class UrlReceiverService {

  constructor(@InjectModel('Url') private readonly urlEntity: Model<Url>) {}

  async createShortUrl(UrlObj: ShortUrlDto): Promise<string> {
    const shortUrl = shortid.generate();
    console.log(UrlObj.url)

  
    const urlInCache = await this.checkIfExists(UrlObj)
    if(urlInCache){
      return urlInCache
    }
  

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


  async checkIfExists(UrlObj: ShortUrlDto): Promise<string> {

    console.log(UrlObj.url)
    const urlInCache = await redisClient.get(UrlObj.url)
    
    

    if(urlInCache){
      console.log("Url fetched from cache:",urlInCache)
      return urlInCache
    }
    console.log("Url not in cache")
    const UrlInDb = await this.urlEntity.findOne({longUrl : UrlObj.url});
    await redisClient.set(UrlInDb.longUrl , UrlInDb.shortUrl)

    if (UrlInDb) {
      console.log("Url fetched from db:",UrlInDb.shortUrl)
      return UrlInDb.shortUrl;
    }

    // After it is recieved, cache the 



  }

}

