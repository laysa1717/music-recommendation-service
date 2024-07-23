import 'dotenv/config';

export default () => ({
  openWeatherMapApiKey: process.env.OPENWEATHERMAP_API_KEY,
  urlTemperature: process.env.URL_TEMPERATURE
})