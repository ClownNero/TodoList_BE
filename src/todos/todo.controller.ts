// 컨트롤러(Controller)에서 API 엔드포인트 제공

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { UpdateTodoDTO } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Body() todoData: CreateTodoDTO): Promise<Todo> {
    return this.todoService.createTodo(todoData);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todoData: UpdateTodoDTO): Promise<Todo> {
    return this.todoService.updateTodo(id, todoData);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<void> {
    return this.todoService.deleteTodo(id);
  }
}