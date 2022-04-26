import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { BoardComponent } from './components/board/board.component';
import { AttemptComponent } from './components/attempt/attempt.component';



@NgModule({
  declarations: [
    KeyboardComponent,
    BoardComponent,
    AttemptComponent
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
