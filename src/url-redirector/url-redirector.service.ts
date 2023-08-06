import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from 'src/Models/url-entity';

import Redis from 'ioredis';

const redisClient = new Redis('redis://redis:6379');
// const redisClient = new Redis();

@Injectable()
export class UrlRedirectorService {
  constructor(@InjectModel('Url') private readonly urlEntity: Model<Url>) {}

  async redirectToOriginal(shortUrl: string): Promise<string> {
    try {

      const longUrl = await this.getOrSetCache(shortUrl, async () => {
        console.log("redirecting 3")

        console.log(shortUrl);

        const url = await this.urlEntity.findOne({ shortUrl: shortUrl });
        console.log(url)
        if (url) {
          url.clicks++;

          await url.save();
       
          return url.longUrl;
        } else {
          throw new Error("No such url found");
        }
      });
      
      return longUrl;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getOrSetCache(key: string, cb: () => Promise<string>): Promise<string> {
    
    const cachedData = await redisClient.get(key);

    if (cachedData) {
      console.log("redirecting 5")
      const update = await this.urlEntity.updateOne({ shortUrl: key }, { $inc: { clicks: 1 } });

      console.log(await this.urlEntity.findOne({shortUrl: key}))
      return cachedData;
    } else {
      console.log("redirecting 6")

      const data = await cb();
      await redisClient.set(key, data);
      return data;
    }
  }
}


