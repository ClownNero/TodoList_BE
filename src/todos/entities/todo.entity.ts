// 엔티티(Entity)를 활용하여 데이터베이스 테이블 정의

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export type TodoStatus = 'all' | 'active' | 'completed';

@Entity({ name: 'todo'}) //  테이블 이름을 명확히 지정정

export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({default:'active'})
    status: TodoStatus;

    @CreateDateColumn()
    createdAt: string;
}