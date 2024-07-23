import 'dotenv/config';

export default () => ({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  tokenUrl: process.env.TOKEN_URL
})