import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';



@NgModule({
  declarations: [
    KeyboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KeyboardComponent
  ]
})
export class GameModule { }
