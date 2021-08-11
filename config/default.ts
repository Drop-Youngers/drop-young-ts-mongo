import * as dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  host: process.env.HOST,
  dbUri: process.env.DATABASE_URI,
  saltWorkFactor: process.env.SALT_WORK_FACTOR,
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL,
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL,
  privateKey: process.env.PRIVATE_KEY,
};
