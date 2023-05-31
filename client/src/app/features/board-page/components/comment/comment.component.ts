import {deleteComment, editComment} from "../../../../store/comments/comment.actions";
import {IComment} from "../../../../shared/models/comment.model";
import {Component, Input, OnInit} from '@angular/core';
import {IAppStore} from "../../../../store/app.store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment?: IComment;

  constructor(
    private store: Store<IAppStore>
  ) {
  }

  ngOnInit(): void {
  }

  removeComment() {
    this.store.dispatch(deleteComment({id: this.comment!._id}))
  }

  changeComment(content: string) {
    this.store.dispatch(editComment({id: this.comment!._id, content}));
  }

}
