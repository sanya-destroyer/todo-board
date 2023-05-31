import {ControlsBarModule} from "../../shared/components/controls-bar/controls-bar.module";
import {BoardButtonComponent} from './components/board-button/board-button.component';
import {BoardModalModule} from "./components/board-modal/board-modal.module";
import {DirectivesModule} from "../../shared/directives/directives.module";
import {BoardComponent} from './components/board/board.component';
import {PipesModule} from "../../shared/pipes/pipes.module";
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    DashboardComponent,
    BoardComponent,
    BoardButtonComponent,
  ],
  imports: [
    CommonModule,
    BoardModalModule,
    DirectivesModule,
    RouterModule,
    ControlsBarModule,
    PipesModule
  ],
})
export class DashboardModule {
}
