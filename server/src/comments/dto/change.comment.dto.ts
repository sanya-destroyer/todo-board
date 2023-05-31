import {ApiProperty} from "@nestjs/swagger";

export class ChangeCommentDto {
    @ApiProperty()
    readonly content: string;
}
