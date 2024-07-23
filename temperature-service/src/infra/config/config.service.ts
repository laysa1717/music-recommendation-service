import 'dotenv/config';

export default () => ({
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  TOKEN_URL: process.env.TOKEN_URL
})