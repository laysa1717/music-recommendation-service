import { Injectable, } from '@nestjs/common';
import * as qs from 'qs';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class SpotifyService {
    private spotifyUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.spotifyUrl = this.configService.get<string>('spotifyUrl');
    }

    async getPlaylist(genre: string) {
        try {
            const payload: unknown = {
                genre: genre
            }
            const response = await this.httpService.post(this.spotifyUrl, payload);
            return response;
        } catch (error) {
            return error;
        }
    }
}
