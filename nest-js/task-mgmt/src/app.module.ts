import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/type-orm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule,
  TypeOrmModule.forRoot(typeORMConfig),
  AuthModule ]
})
export class AppModule {}
