import 'dotenv/config';

export default () => ({
  OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY,
  URL_TEMPERATURE: process.env.URL_TEMPERATURE
})