import {
    TypeOrmModuleOptions,
  } from '@nestjs/typeorm';
import 'dotenv/config';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [join(__dirname + '/../**/*.entity.{js,ts}')],
    migrations: [join(__dirname + '/../database/migrations/*{.ts,.js}')],
    extra: {
      charset: 'utf8mb4_unicode_ci',
    },
    synchronize: false,
    logging: true,
  };
