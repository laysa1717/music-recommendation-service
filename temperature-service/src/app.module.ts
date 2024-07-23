import { Module } from '@nestjs/common';
import { TemperatureController } from './infra/controller/temperature.controller';
import { EnvConfigModule } from './infra/config/config.module';
import { HttpModule } from '@nestjs/axios';
import { TemperatureUseCase } from './usecase/temperature-case/temperature.usecase';

@Module({
  imports: [HttpModule, EnvConfigModule],
  controllers: [TemperatureController],
  providers: [TemperatureUseCase],
})
export class AppModule {}
