import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeriesModule } from './series/series.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Series } from './series/entities/series.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'parcial2_ecg',
      entities: [Series],
      synchronize: true,
    })
    ,SeriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
