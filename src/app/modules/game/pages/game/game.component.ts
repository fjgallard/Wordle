import { Component, OnInit } from '@angular/core';

import data from 'src/data/words.json';

/**
 * An instance of a game
 */
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  isGameOver = false;
  numberOfAttempts = 6;
  currentAttempt = 0;
  currentTile = 0;
  currentWord = '';

  constructor() { }

  ngOnInit(): void {
    this.initWord();
  }

  private initWord() {
    this.currentWord = data[7];
    console.log(this.currentWord);
  }

}
