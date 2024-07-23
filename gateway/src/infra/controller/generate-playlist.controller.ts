import { Controller, Post, Body } from '@nestjs/common';
import { GeneratePlaylistUseCase } from 'src/usecase/generate-playlist.usecase';


@Controller('hero')
export class GeneratePlaylistController {
  constructor(
    private readonly generateplaylistusecase: GeneratePlaylistUseCase
  ) {}

  @Post('generate-playlist')
  async generateTracks(@Body() city:any) {
    try {
      return await this.generateplaylistusecase.exec(city);    
    } catch (error) {
      return error
    }
  }
}
