import { DataSource, DataSourceOptions } from "typeorm";

import User from "../models/User.pg";

const entities = [User];
const baseParams: DataSourceOptions = {
  database: "rodrigoPortfolio",
  entities,
  synchronize: true,
  logging: true,
  type: "postgres",
};
Object.assign(
  baseParams,
  process.env.NODE_ENV
    ? {
        //HEROKU CREATES THIS ENV AUTOMATICALLY. No need to set it yourself
        //with render I have to set a specific env variable
        url: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        url: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
        //I had to comment this since I dont have local PG currently
        // host: "localhost",
        // port: 5432,
        // username: process.env.POSTGRES_USERNAME,
        // password: process.env.POSTGRES_PWD,
      }
);
const PGDataSource = new DataSource(baseParams);
export function connectPostgres() {
  return PGDataSource.initialize();
}

const repoMachine = {
  User: PGDataSource.getRepository(User),
};

export default repoMachine;
