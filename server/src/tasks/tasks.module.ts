import {forwardRef, Module} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {TasksController} from './tasks.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {TaskSchema} from "./tasks.model";
import {ListsModule} from "../lists/lists.module";
import {CommentsModule} from "../comments/comments.module";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}]),
        forwardRef(() => ListsModule),
        forwardRef(() => CommentsModule)
    ],
    providers: [TasksService],
    controllers: [TasksController],
    exports: [
        TasksService,
        MongooseModule
    ]
})
export class TasksModule {
}
