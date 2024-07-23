import 'dotenv/config';

export default () => ({
  generateUrl: process.env.GENERATE_URL,
  spotifyUrl: process.env.SPOTIFY_URL
})