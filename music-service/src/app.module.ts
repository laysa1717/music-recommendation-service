import { Module } from '@nestjs/common';
import { SpotifyController } from './infra/controller/spotify.controller';
import { ConfigModule } from './infra/config/config.module';
import { HttpModule } from '@nestjs/axios';
import { SpotifyUseCase } from './usecase/spotify/spotify.usecase';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [SpotifyController],
  providers: [SpotifyUseCase],
})
export class AppModule {}
