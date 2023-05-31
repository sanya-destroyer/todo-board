import {IChangeComment, IComment, ICreateComment} from "../../../shared/models/comment.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }


  init(boardId?: string) {
    if (boardId) {
      return this.http.get<IComment[]>(`comments?boardId=${boardId}`)
    }
    return this.http.get<IComment[]>('comments');
  }

  createComment(body: ICreateComment) {
    return this.http.post<IComment>('comments', body);
  }

  deleteComment({id}: { id: string }) {
    return this.http.delete(`comments/${id}`);
  }

  changeComment({id, content}: IChangeComment) {
    return this.http.put(`comments/${id}`, {content})
  }
}
