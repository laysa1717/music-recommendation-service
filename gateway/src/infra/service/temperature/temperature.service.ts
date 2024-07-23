import { Injectable, } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class TemperatureService {
    private url_temperature: string;
    private url_spotify: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.url_temperature = this.configService.get<string>('GENERATE_URL');
        this.url_spotify = this.configService.get<string>('SPOTIFY_URL');
    }

    async getTemperature(city: any) {
        try {

            const response_temp = await lastValueFrom(this.httpService.post(this.url_temperature, city));
            if (response_temp) {
                return await this.temperatureGenreCal(response_temp);
            }
        } catch (error) {
            return error;
        }
    }

    async temperatureGenreCal(temp: any) {
        try {
            const genre = temp >= 25 ? "pop" : temp >= 10 ? "rock" : "classica";
            const response = await lastValueFrom(this.httpService.post(this.url_spotify, {
                genre: genre
            })
            );
            return response;
        } catch (error) {
            return error
        }
    }
}
