import * as mongoose from 'mongoose';

export interface Url {
    url: string;
    location: string;
    referrer: string;
    clicks: number;

  }
  

export const UrlSchema = new mongoose.Schema({
    url: String,
    location: String,
    referrer: String,
    clicks: Number,
  });
