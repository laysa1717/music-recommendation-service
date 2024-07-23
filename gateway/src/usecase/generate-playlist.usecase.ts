import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { TemperatureService } from 'src/infra/service/temperature/temperature.service';
import { SpotifyService } from 'src/infra/service/spotify/spotify.service';


@Injectable()
export class GeneratePlaylistUseCase {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
        private readonly temperatureService: TemperatureService
    ) { }

    async exec(city: unknown) {
        try {
           return await this.temperatureService.getTemperature(city);
        } catch (error) {
           return error 
        } 
    }
}