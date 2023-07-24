import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from 'src/Models/url-entity';

import Redis from 'ioredis';
const redisClient = new Redis();

@Injectable()
export class UrlRedirectorService {
  constructor(@InjectModel('Url') private readonly urlEntity: Model<Url>) {}

  async redirectToOriginal(shortUrl: string): Promise<string> {
    console.log(shortUrl);

    try {
      const longUrl = await this.getOrSetCache(shortUrl, async () => {
        const url = await this.urlEntity.findOne({ shortUrl: shortUrl });
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
      throw error;
    }
  }

  async getOrSetCache(key: string, cb: () => Promise<string>): Promise<string> {

    const cachedData = await redisClient.get(key);

    if (cachedData) {
  
      return cachedData;
    } else {
  
      const data = await cb();
      await redisClient.set(key, data);
      return data;
    }
  }
}
