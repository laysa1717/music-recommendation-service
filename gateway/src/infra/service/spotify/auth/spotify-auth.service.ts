import { Injectable, } from '@nestjs/common';
import * as qs from 'qs';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class AuthSpotifyService {
    private clientId: string;
    private clientSecret: string;
    private authToken: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.clientId = this.configService.get<string>('CLIENT_ID');
        this.clientSecret = this.configService.get<string>('CLIENT_SECRET');
        this.authToken = Buffer.from(`${this.clientId}:${this.clientSecret}`, 'utf-8').toString('base64');

    }

    async getSpotifyToken(): Promise<void> {
        const token_url = this.configService.get<string>('TOKEN_URL');
        const data = qs.stringify({ 'grant_type': 'client_credentials' });

        const response = await lastValueFrom(this.httpService.post(token_url, data, {
            headers: {
                'Authorization': `Basic ${this.authToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }),
        );
        return response.data.access_token;

    }
}