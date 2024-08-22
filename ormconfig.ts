
import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['src/../**/*.entity.{js,ts}'],
  migrations: ['src/database/migrations/*.{js,ts}'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
});
