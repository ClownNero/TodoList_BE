// DTO (Data Transfer Object)를 통해 요청 데이터 검증

import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TodoStatus } from "../entities/todo.entity";

export class CreateTodoDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    status?: TodoStatus;
}