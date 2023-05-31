import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {addBoard} from "../../../../store/boards/board.actions";
import {BoardService} from "../../services/board.service";
import {IAppStore} from "../../../../store/app.store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-board-modal',
  templateUrl: './board-modal.component.html',
  styleUrls: ['./board-modal.component.scss', '../../../../shared/styles/modal.scss']
})
export class BoardModalComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter();

  modalForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    description: new FormControl('', [Validators.required])
  })

  constructor(
    private boardService: BoardService,
    private store: Store<IAppStore>
  ) {
  }

  get nameError() {
    return this.modalForm.controls.name.errors;
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  submitForm() {

    const name = this.modalForm.controls.name.value as string;
    const description = this.modalForm.controls.description.value as string;

    this.store.dispatch(addBoard({name, description}))

    this.closeModal();
  }

  modalClick(e: Event) {
    e.stopPropagation();
  }

}
