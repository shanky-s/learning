import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dtos/create-task.dto';
import { GetTasksFilterDTO } from 'src/dtos/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository, DeleteResult } from 'typeorm';
import { TaskRepository } from './task.repository';
import { Certificate } from 'crypto';
import { TASK_STATUS } from './task-status.enum';

@Injectable()
export class TasksService {
    // private tasks: Task[] = [];
    constructor(
        @InjectRepository(TaskRepository) 
        private taskRepo:TaskRepository

    ){

    }

    getTasks(getTaskFilterDTO: GetTasksFilterDTO): Promise<Task[]> {
        return this.taskRepo.getTasks(getTaskFilterDTO);
    }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepo.findOne(id)
        if (!found) throw new NotFoundException(`Task with id - ${id} not found`)
        return found
    }

    async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
        
        return this.taskRepo.createTask(createTaskDTO)
       
    }

    async deleteTask(id: number): Promise<void> {
        
        const result = await this.taskRepo.delete(id);
        if (result.affected === 0)
            throw new NotFoundException(`Task with id - ${id} not found`)
    }

   async updateTask(id: number, status: TASK_STATUS): Promise<Task> {
        const task = await this.getTaskById(id)
        task.status = status
        task.save()
        return task
    }
}
