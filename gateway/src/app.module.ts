import { Module } from '@nestjs/common';
import { GeneratePlaylistController } from './infra/controller/generate-playlist.controller';
import { EnvConfigModule } from './infra/config/config.module';
import { HttpModule } from '@nestjs/axios';
import { GeneratePlaylistUseCase } from './usecase/generate-playlist.usecase';
import { SpotifyService } from './infra/service/spotify/spotify.service';
import { TemperatureService } from './infra/service/temperature/temperature.service';


@Module({
  imports: [HttpModule, EnvConfigModule],
  controllers: [GeneratePlaylistController],
  providers: [GeneratePlaylistUseCase, SpotifyService, TemperatureService],
})
export class AppModule {}
