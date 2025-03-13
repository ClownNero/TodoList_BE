// DTO (Data Transfer Object)를 통해 요청 데이터 검증

import { IsOptional, IsString } from 'class-validator';
import { TodoStatus } from '../entities/todo.entity';

export class UpdateTodoDTO {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  status?: TodoStatus;
}