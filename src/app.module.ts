import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsService } from './films/films.service';
import { FilmsController } from './films/films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DBconfig} from './orm.config'
import { Film } from './entities/film.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Film]),
    TypeOrmModule.forRoot(DBconfig),
    AuthModule
  ],
  controllers: [AppController, FilmsController],
  providers: [AppService, FilmsService],
})
export class AppModule {}
