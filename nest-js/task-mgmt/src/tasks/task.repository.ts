import { Repository, EntityRepository, QueryBuilder } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDTO } from "src/dtos/create-task.dto";
import { TASK_STATUS } from "./task-status.enum";
import { GetTasksFilterDTO } from "src/dtos/get-task-filter.dto";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{
   async createTask(createTaskDTO:CreateTaskDTO): Promise<Task>{
        const {title,description} = createTaskDTO;
        const task = new Task();
        task.title= title;
        task.description=description;
        task.status = TASK_STATUS.OPEN;
        await task.save()

        return task;

    }

    async getTasks(getTaskFilterDTO:GetTasksFilterDTO):Promise<Task[]>{
        const{filter, search} = getTaskFilterDTO;
        const query = await this.createQueryBuilder("task");
        if(search){
            query.andWhere("task.title LIKE :search OR task.description LIKE :search",{search:`%${search}%`})
        }
        if(filter){
            query.andWhere("task.status = :status",{status:filter})
        }
        const tasks = query.getMany();
        return tasks;
    }

}