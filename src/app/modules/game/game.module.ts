import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { BoardComponent } from './components/board/board.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { GameComponent } from './pages/game/game.component';
import { GameRoutingModule } from './game-routing.module';



@NgModule({
  declarations: [
    KeyboardComponent,
    BoardComponent,
    AttemptComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  exports: [
    KeyboardComponent,
    BoardComponent
  ]
})
export class GameModule { }
