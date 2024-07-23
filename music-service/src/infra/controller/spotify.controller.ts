import { Controller, Post, Body } from '@nestjs/common';
import { SpotifyUseCase } from 'src/usecase/spotify/spotify.usecase';

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyusecase: SpotifyUseCase) {}

  @Post('playlist')
  async getTopTracks(@Body() genero:any) {
    console.log('chegou controller');
    await this.spotifyusecase.exec(genero);
  }
}
