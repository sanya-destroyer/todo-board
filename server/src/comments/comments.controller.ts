import {Body, Controller, Delete, Get, Post, Put, Req, UseGuards} from '@nestjs/common';
import {CommentsService} from "./comments.service";
import {CreateCommentDto} from "./dto/create.comment.dto";
import {ChangeCommentDto} from "./dto/change.comment.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('comments')
export class CommentsController {

    constructor(private commentService: CommentsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getComments(@Req() request) {
        return this.commentService.getComments(request);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createComment(@Req() request, @Body() commentDto: CreateCommentDto) {
        return this.commentService.createComment(request, commentDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteComment(@Req() request) {
        return this.commentService.deleteComment(request);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id',)
    changeComment(@Req() request, @Body() changeCommentDto: ChangeCommentDto) {
        return this.commentService.changeComment(request, changeCommentDto);
    }
}
