import { generalConfig } from 'Config';

let mongoURITemp = `mongodb://${generalConfig.mongoDB.username}:${encodeURIComponent(generalConfig.mongoDB.password)}@${generalConfig.mongoDB.host}/${generalConfig.mongoDB.dbName}`;

if (generalConfig.mongoDB.port) {
  mongoURITemp = `mongodb://${generalConfig.mongoDB.username}:${encodeURIComponent(generalConfig.mongoDB.password)}@${generalConfig.mongoDB.host}:${generalConfig.mongoDB.port}/${generalConfig.mongoDB.dbName}`;
}

export const mongoURI = mongoURITemp;
