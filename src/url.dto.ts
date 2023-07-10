
import {IsString,IsNotEmpty, IsUrl, IsAlphanumeric} from 'class-validator'

export class UrlDto{ 

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    

    longUrl: string;
    
    
}