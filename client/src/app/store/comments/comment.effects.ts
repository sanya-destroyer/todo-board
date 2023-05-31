import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CommentService} from "../../features/board-page/services/comment.service";
import * as CommentActions from './comment.actions';
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class CommentEffects {

  getComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.getComments),
      mergeMap(() =>
        this.commentService.init()
          .pipe(
            map((comments) =>
              CommentActions.getCommentsSuccess({comments})
            ),
            catchError((err) => of(
              CommentActions.editCommentFailure({message: err})
            ))
          )
      )
    )
  )
  addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.addComment),
      mergeMap((action) =>
        this.commentService.createComment(action)
          .pipe(
            map((comment) =>
              CommentActions.addCommentSuccess({comment})
            ),
            catchError((err) => of(
              CommentActions.addCommentFailure({message: err})
            ))
          )
      )
    )
  )

  editComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.editComment),
      mergeMap((action) =>
        this.commentService.changeComment(action)
          .pipe(
            map(() =>
              CommentActions.editCommentSuccess(action)
            ),
            catchError((err) => of(
              CommentActions.editCommentFailure({message: err})
            ))
          )
      )
    )
  )

  deleteComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.deleteComment),
      mergeMap((action) =>
        this.commentService.deleteComment(action)
          .pipe(
            map(() =>
              CommentActions.deleteCommentSuccess(action)
            ),
            catchError((err) => of(
              CommentActions.deleteCommentFailure({message: err})
            ))
          )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private commentService: CommentService
  ) {
  }

}
