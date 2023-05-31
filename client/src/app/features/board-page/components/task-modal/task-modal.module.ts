import {TaskModalComponent} from './task-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    TaskModalComponent
  ],
  exports: [
    TaskModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TaskModalModule {
}
