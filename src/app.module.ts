import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as any, // ✅ 환경 변수에서 DB 타입 설정
      host: process.env.DATABASE_HOST, // ✅ 환경 변수 적용
      port: Number(process.env.DATABASE_PORT), // ✅ 숫자로 변환
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // ✅ 자동 엔티티 로드
      synchronize: true, // 개발 환경에서만 true (운영에서는 false 권장)
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
