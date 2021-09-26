export const config = {
  general: {
    prod: process.env.NODE_ENV === 'production',
    appPort: process.env.APP_PORT,
  },
  mongoDB: {
    protocol: process.env.DB_PROTOCOL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
  },
};
