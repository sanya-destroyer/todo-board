import mongoose, {Types} from "mongoose";

export const CommentSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    taskId: {type: String, required: true},
    boardId: {type: String, required: true},
    content: {type: String},
})

export interface IComment extends mongoose.Document {
    id: Types.ObjectId;
    userId: Types.ObjectId;
    taskId: Types.ObjectId;
    boardId: Types.ObjectId;
    content: string;
}
