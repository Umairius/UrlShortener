
import {IsString,IsNotEmpty, IsUrl, IsAlphanumeric, IsDefined} from 'class-validator'

export class ShortUrlDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsUrl()
    url: string;
  
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    location: string;
    

    clicks: number = 0;
  
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    referrer: string;
  }
  

export class LongUrlDto{
    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    Url: string;
}