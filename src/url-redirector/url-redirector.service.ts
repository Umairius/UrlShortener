import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from 'src/Models/url-entity';

import Redis from 'ioredis';
const redisClient = new Redis(); // Assuming Redis server is running locally on the default port

@Injectable()
export class UrlRedirectorService {
  constructor(@InjectModel('Url') private readonly urlEntity: Model<Url>) {}

  async redirectToOriginal(shortUrl: string): Promise<string> {
    console.log(shortUrl);

    try {
      // Use the getOrSetCache function to fetch the long URL from cache or database
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
    // Check if the key exists in the cache
    const cachedData = await redisClient.get(key);

    if (cachedData) {
      // If it does, return the data
      return cachedData;
    } else {
      // If it does not, call the callback function
      const data = await cb();

      // Save the data in the cache
      await redisClient.set(key, data);

      // Return the data
      return data;
    }
  }
}
