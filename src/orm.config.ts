import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DBconfig: TypeOrmModuleOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "root",
    "database": "films",
    "entities": [
        //"src/**/**.entity{.ts,.js}"
        "dist/**/*.entity{ .ts,.js}"
    ],
    "synchronize": true
}