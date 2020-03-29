
import { IsOptional, IsNotEmpty, IsIn } from "class-validator"
import { TASK_STATUS } from "../tasks/task-status.enum"

export class GetTasksFilterDTO{
    @IsOptional()
    @IsNotEmpty()
    search:string

    @IsOptional()
    @IsIn([TASK_STATUS.OPEN,TASK_STATUS.IN_PROGRESS,TASK_STATUS.COMPLETED])
    filter:TASK_STATUS
}