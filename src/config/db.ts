import { generalConfig } from 'Config';

let mongoURITemp = `${generalConfig.mongoDB.protocol}://${generalConfig.mongoDB.username}:${encodeURIComponent(generalConfig.mongoDB.password)}@${generalConfig.mongoDB.host}/${generalConfig.mongoDB.dbName}?retryWrites=true&w=majority`;

if (generalConfig.mongoDB.port) {
  mongoURITemp = `${generalConfig.mongoDB.protocol}://${generalConfig.mongoDB.username}:${encodeURIComponent(generalConfig.mongoDB.password)}@${generalConfig.mongoDB.host}:${generalConfig.mongoDB.port}/${generalConfig.mongoDB.dbName}`;
}

export const mongoURI = mongoURITemp;
