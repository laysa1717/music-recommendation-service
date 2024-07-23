import { Injectable, } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class TemperatureService {
    private generateUrl: string;
    private spotifyUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.generateUrl = this.configService.get<string>('generateUrl');
        this.spotifyUrl = this.configService.get<string>('spotifyUrl');
    }

    async getTemperature(city: unknown) {
        try {

            const response_temp = await lastValueFrom(this.httpService.post(this.generateUrl, city));
            if (response_temp) {
                return await this.temperatureGenreCal(response_temp);
            }
        } catch (error) {
            return error;
        }
    }

    async temperatureGenreCal(temp) {
        try {
            const genre = temp >= 25 ? "pop" : temp >= 10 ? "rock" : "classica";
            const response = await lastValueFrom(this.httpService.post(this.spotifyUrl, {
                genre: genre
            })
            );
            return response;
        } catch (error) {
            return error
        }
    }
}
