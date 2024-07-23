import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class SpotifyUseCase {
    private genre_search: string;
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

    async exec(token: any, genre: any) {
        this.genre_search = genre.genre;
        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await lastValueFrom(
            this.httpService.get(`https://api.spotify.com/v1/search?q=${this.genre_search}&type=playlist`, options)
        );

        return response.data.playlists.items[0].external_urls;
        
    }
}