import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { BoardComponent } from './components/board/board.component';



@NgModule({
  declarations: [
    KeyboardComponent,
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KeyboardComponent,
    BoardComponent
  ]
})
export class GameModule { }
