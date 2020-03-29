 import {TypeOrmModule} from '@nestjs/typeorm'

 export const typeORMConfig : TypeOrmModule ={
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "real$123",
    "database": "task_mgmt",
    "entities": [__dirname + "/../**/*.entity{.ts,.js}"],
    "synchronize": true
  }