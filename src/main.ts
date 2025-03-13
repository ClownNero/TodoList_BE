import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정 추가
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:8000'],  // ✅ 여러 개 허용
    credentials: true,  // ✅ 쿠키 및 인증 정보 포함 가능
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // 허용할 HTTP 메서드
  });
  
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
