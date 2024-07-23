import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class SpotifyUseCase {
    private genreSearch: string;
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

    async exec(token, genre) {
        this.genreSearch = genre.genre;
        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await lastValueFrom(
            this.httpService.get(`https://api.spotify.com/v1/search?q=${this.genreSearch}&type=playlist`, options)
        );

        return response.data.playlists.items[0].external_urls;
        
    }
}