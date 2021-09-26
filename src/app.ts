import dotenv from 'dotenv';
import moduleAlias from 'module-alias';
dotenv.config({ path: '.env' });

moduleAlias.addAliases({
  Config: __dirname + '/config',
  Controllers: __dirname + '/controllers',
  Handlers: __dirname + '/handlers',
  Middlewares: __dirname + '/middlewares',
  Helpers: __dirname + '/helpers',
  Models: __dirname + '/models',
  Routes: __dirname + '/routes',
  Validators: __dirname + '/validators',
});

import express, { Router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { generalConfig, dbConfig } from 'Config';
(async () => {
  await mongoose.connect(dbConfig.mongoURI, () => console.log('db successfully connected!'));
  const app = express();
  const port = generalConfig.general.appPort;
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.listen(port, () => console.log(`app run on port ${port}`));
})();
