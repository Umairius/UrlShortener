import * as mongoose from 'mongoose';

export interface Url {
  longurl: string;
  location: string;
  referrer: string;
  clicks: number;
}

export const UrlSchema = new mongoose.Schema({
  shortUrl: { type: String, required: true, unique: true },
  longUrl: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  referrer: { type: String, required: true },
  clicks: { type: Number, default: 0 },
});
