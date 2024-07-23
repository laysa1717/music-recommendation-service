import { Module } from '@nestjs/common';
import { SpotifyController } from './infra/controller/spotify.controller';
import { EnvConfigModule } from './infra/config/config.module';
import { HttpModule } from '@nestjs/axios';
import { SpotifyUseCase } from './usecase/spotify/spotify.usecase';
import { AuthSpotifyService } from './infra/service/spotify/auth/spotify-auth.service';

@Module({
  imports: [HttpModule, EnvConfigModule],
  controllers: [SpotifyController],
  providers: [SpotifyUseCase, AuthSpotifyService],
})
export class AppModule {}
