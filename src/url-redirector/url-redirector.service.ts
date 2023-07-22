import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Url } from 'src/Models/url-entity';

@Injectable()
export class UrlRedirectorService {
  
  constructor(@InjectModel('Url') private readonly urlEntity: Model<Url>) {}

  redirectToOriginal( shortUrl:string ): Promise<string>{
    console.log(shortUrl)
      return  new Promise((resolve, reject) => {
        this.urlEntity.findOne({shortUrl : shortUrl})
          .then((url) => {
            if(url){
              console.log(url)
              url.clicks++;
              url.save();
              resolve(url.longUrl);
            }
            else{
              reject("No such url found");
            }
          })
          .catch((error) => {
            reject(error);
          });
      }

      );
  }

}
