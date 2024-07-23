import { Injectable, } from '@nestjs/common';
import * as qs from 'qs';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class SpotifyService {
    private url_spotify: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.url_spotify = this.configService.get<string>('SPOTIFY_URL');
    }

    async getPlaylist(genre: string) {
        try {
            const payload: any = {
                genre: genre
            }
            const response = await this.httpService.post(this.url_spotify, payload);
            return response;
        } catch (error) {
            return error;
        }
    }
}
