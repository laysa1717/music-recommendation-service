import { Controller, Post, Body } from '@nestjs/common';
import { TemperatureUseCase } from 'src/usecase/temperature-case/temperature.usecase';


@Controller('temperature')
export class TemperatureController {
  constructor(
    private readonly temperatureUseCase: TemperatureUseCase,
  ) {}

  @Post('city')
  async getTemperature(@Body() city:unknown) {    
    try {
        return await this.temperatureUseCase.exec(city);
    } catch (error) {
      return error
    }
  }
}
