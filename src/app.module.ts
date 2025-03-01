import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST, // ✅ 환경 변수 적용
      port: Number(process.env.DATABASE_PORT), // ✅ 숫자로 변환
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: false, // 개발 환경에서만 true (운영에서는 false 권장)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
