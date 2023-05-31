import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateCommentDto} from "./dto/create.comment.dto";
import {ChangeCommentDto} from "./dto/change.comment.dto";
import {DeleteBy, DeleteComments} from "./types/comment.types";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IComment} from "./comments.model";
import {ITask} from "../tasks/tasks.model";

@Injectable()
export class CommentsService {

    constructor(
        @InjectModel('Comment') private readonly commentModel: Model<IComment>,
        @InjectModel('Task') private readonly taskModel: Model<ITask>,
    ) {

    }


    async getComments(req) {
        const {boardId} = req.query;

        if (!boardId) {
            const lists = await this.commentModel.find({userId: req.user._id});

            return lists
        }

        const lists = await this.commentModel.find({boardId});

        return lists;
    }

    async createComment(req, commentDto: CreateCommentDto) {
        if (!commentDto.boardId) {
            throw new HttpException('Board id wasn\'t provided', HttpStatus.BAD_REQUEST);
        }

        if (!commentDto.taskId) {
            throw new HttpException('Task id wasn\'t provided', HttpStatus.BAD_REQUEST);
        }

        if (!commentDto.content) {
            throw new HttpException('Comment content wasn\'t provided', HttpStatus.BAD_REQUEST);
        }

        const newComment = new this.commentModel({
            userId: req.user._id,
            taskId: commentDto.taskId,
            boardId: commentDto.boardId,
            content: commentDto.content
        });

        newComment.save();

        return newComment;
    }

    async deleteComment(req) {
        const {id} = req.params;

        if (!id) {
            throw new HttpException('Comment id wasn\'t provided', HttpStatus.BAD_REQUEST);
        }

        const commentToDelete = await this.commentModel.findById(id);

        if (!commentToDelete) {
            throw new HttpException('There is no comment with such id', HttpStatus.BAD_REQUEST);
        }

        if (commentToDelete.userId !== req.user._id) {
            throw new HttpException('This operation is forbidden', HttpStatus.FORBIDDEN);
        }

        await this.commentModel.findByIdAndRemove(commentToDelete._id);

        return {message: "Comment was deleted successfully "};
    }

    async changeComment(req, commentDto: ChangeCommentDto) {
        const {id} = req.params;

        if (!id) {
            throw new HttpException('Comment id wasn\'t provided', HttpStatus.BAD_REQUEST);
        }

        if (!commentDto.content) {
            throw new HttpException('Content field wasn\'t provided', HttpStatus.BAD_REQUEST);
        }

        const commentToUpdate = await this.commentModel.findById(id);

        if (!commentToUpdate) {
            throw new HttpException('There is no comment with such id', HttpStatus.BAD_REQUEST);
        }

        if (commentToUpdate.userId !== req.user._id) {
            throw new HttpException('This operation is forbidden', HttpStatus.FORBIDDEN);
        }

        commentToUpdate.content = commentDto.content;
        await commentToUpdate.save();

        return {
            message: "Comment was changed successfully"
        }
    }

    async deleteAllComments(action: DeleteComments) {
        switch (action.type) {
            case DeleteBy.boardId:
                await this.commentModel.deleteMany({boardId: action.id});
                break;
            case DeleteBy.taskId:
                await this.commentModel.deleteMany({taskId: action.id});
                break;
        }
    }
}
