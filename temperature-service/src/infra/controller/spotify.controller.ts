import { Controller, Post, Body } from '@nestjs/common';
import { SpotifyUseCase } from 'src/usecase/spotify/spotify.usecase';
import { AuthSpotifyService } from '../service/spotify/auth/spotify-auth.service';


@Controller('spotify')
export class SpotifyController {
  constructor(
    private readonly spotifyusecase: SpotifyUseCase,
    private readonly spotifyauthservice: AuthSpotifyService
  ) {}

  @Post('playlist')
  async getTopTracks(@Body() genrer:any) {
    try {
      const token:any = await this.spotifyauthservice.getSpotifyToken();    
      if (token) {
        return await this.spotifyusecase.exec(token, genrer);
      }
    } catch (error) {
      return error
    }
  }
}
