import {forwardRef, Module} from '@nestjs/common';
import {CommentsService} from './comments.service';
import {CommentsController} from "./comments.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {CommentSchema} from "./comments.model";
import {TasksModule} from "../tasks/tasks.module";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Comment', schema: CommentSchema}]),
        forwardRef(() => TasksModule)
    ],
    providers: [CommentsService],
    controllers: [CommentsController],
    exports: [CommentsService]
})
export class CommentsModule {
}
