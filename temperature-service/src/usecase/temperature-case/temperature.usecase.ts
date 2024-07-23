import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class TemperatureUseCase {
    private city: string;
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

    async exec(city: any) {
        const apiKey = this.configService.get<string>('OPENWEATHERMAP_API_KEY');
        const url_temperature = this.configService.get<string>('URL_TEMPERATURE');

        this.city = city.city;
        const response = await lastValueFrom(
            this.httpService.get(`${url_temperature}/weather?q=${this.city}&units=metric&appid=${apiKey}`)
        );

        return response.data.main.temp
        
    }
}