import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class TemperatureUseCase {
    private cityName: string;
    private openWeatherMapApiKey: string;
    private urlTemperature: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

    async exec(city) {
        this.openWeatherMapApiKey = this.configService.get<string>('openWeatherMapApiKey');
        this.urlTemperature = this.configService.get<string>('urlTemperature');

        this.cityName = city.city;
        const response = await lastValueFrom(
            this.httpService.get(`${this.urlTemperature}/weather?q=${this.cityName}&units=metric&appid=${this.openWeatherMapApiKey}`)
        );

        return response.data.main.temp
        
    }
}