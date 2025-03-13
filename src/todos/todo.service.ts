// 서비스(Service)에서 비즈니스 로직을 처리

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "./entities/todo.entity";
import { CreateTodoDTO } from "./dto/create-todo.dto";
import { UpdateTodoDTO } from "./dto/update-todo.dto";

@Injectable()

export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ){}

    async getTodos(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async createTodo(todoData: CreateTodoDTO): Promise<Todo> {
        const newTodo = this.todoRepository.create(todoData);
        return await this.todoRepository.save(newTodo);
    }

    async updateTodo(id: string, todoData: UpdateTodoDTO): Promise<Todo> {
        const todo = await this.todoRepository.preload({id, ...todoData});
        if(!todo) throw new NotFoundException(`Todo with ID ${id} not found`);

        return await this.todoRepository.save(todo);
    }

    async deleteTodo(id:string): Promise<void> {
        const result = await this.todoRepository.delete(id);
        if(result.affected === 0) throw new NotFoundException(`Todo with ID ${id} not found`);
    }
}