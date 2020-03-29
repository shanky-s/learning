import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TASK_STATUS } from "../tasks/task-status.enum";

export class  TaskStatusValidationPipe implements PipeTransform{
    readonly allowedStatusValues =[
        TASK_STATUS.OPEN,
        TASK_STATUS.IN_PROGRESS,
        TASK_STATUS.COMPLETED
    ]

    transform(value:any): any {
        let status : TASK_STATUS = value.toString().toUpperCase();
        if(!this.isValidStatus(status))
            throw new BadRequestException(`Invalid Task Status : ${status}`)

        return status
    }

    isValidStatus(value:TASK_STATUS) : boolean{
       return  this.allowedStatusValues.indexOf(value) !== -1
    }
}