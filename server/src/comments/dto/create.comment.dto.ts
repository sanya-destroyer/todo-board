import {ApiProperty} from "@nestjs/swagger";

export class CreateCommentDto {
    @ApiProperty()
    readonly taskId: string;

    @ApiProperty()
    readonly boardId: string;

    @ApiProperty()
    readonly content: string;
}
