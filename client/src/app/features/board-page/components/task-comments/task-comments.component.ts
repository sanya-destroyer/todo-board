import {selectCommentsByTaskId} from "../../../../store/comments/comment.selector";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {addComment} from "../../../../store/comments/comment.actions";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IComment} from "../../../../shared/models/comment.model";
import {IAppStore} from "../../../../store/app.store";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.scss', '../../../../shared/styles/modal.scss']
})
export class TaskCommentsComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter();
  @Input() taskId?: string;
  @Input() boardId?: string;
  comments$?: Observable<IComment[]>

  commentForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.maxLength(25)])
  })


  constructor(
    private store: Store<IAppStore>
  ) {
  }

  get contentError() {
    return this.commentForm.controls.content.errors;
  }

  modalClick(e: Event) {
    e.stopPropagation();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  submitForm() {
    if (this.commentForm.valid && this.taskId && this.boardId) {
      this.store.dispatch(addComment({
        taskId: this.taskId,
        boardId: this.boardId,
        content: this.commentForm.controls.content.value as string
      }));

      this.commentForm.reset();
    }
  }

  ngOnInit(): void {
    if (this.taskId) {
      this.comments$ = this.store.pipe(select(selectCommentsByTaskId(this.taskId)));
    }
  }

}
