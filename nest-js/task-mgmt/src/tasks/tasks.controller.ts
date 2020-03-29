import { Controller, Get, Body, Post, Param, Delete, Patch, ValidationPipe, Query, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from 'src/dtos/create-task.dto';
import { TaskStatusValidationPipe } from 'src/pipes/task-status-validation.pipe';
import { GetTasksFilterDTO } from 'src/dtos/get-task-filter.dto';
import { Task } from './task.entity';
import { TASK_STATUS } from './task-status.enum';


@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {

    }
    @Get()
    getTasks(@Query(ValidationPipe)  getTaskFilterDTO: GetTasksFilterDTO):Promise< Task[]> {
        return this.tasksService.getTasks(getTaskFilterDTO);
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTask(@Body(ValidationPipe) createTaskDTO: CreateTaskDTO): Promise<Task> {
        return this.tasksService.createTask(createTaskDTO)
    }

    @Delete('/:id')
    deleteTask(@Param('id',ParseIntPipe) id: number): Promise<void> {
       return this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id',ParseIntPipe) id: number,
        @Body('status', TaskStatusValidationPipe) status:TASK_STATUS
        ):Promise<Task>{
        return this.tasksService.updateTask(id, status)
    }
}
