import { Component, OnInit } from '@angular/core';

import data from 'src/data/words.json';
import { Attempt, AttemptStatus } from '../../interfaces/attempt.interface';

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
  // attempts: string[] = [];
  attempts: Attempt[] = [];

  numberOfAttempts = 6;
  currentAttempt = 0;
  currentTile = 0;
  targetWord = '';

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.numberOfAttempts; index++) {
      this.attempts.push({
        status: [],
        word: ''
      });
    }

    this.initWord();
  }

  inputWord(event: Event) {
    const inputEvent = event as InputEvent;

    if (inputEvent.inputType === 'deleteContentBackward') {
      this.attempts[this.currentAttempt].word = this.attempts[this.currentAttempt].word.substring(0, this.attempts[this.currentAttempt].word.length-1);
      return;
    }

    this.attempts[this.currentAttempt].word += inputEvent.data;
    console.log('progress', this.attempts[this.currentAttempt].word);
  }

  enterPressed() {
    if (this.attempts[this.currentAttempt].word.length >= 5) {
      return this.compareWords();
    }
  }

  private compareWords() {
    if (this.attempts[this.currentAttempt].word === this.targetWord) {
      return alert('Success');
    }

    for(let i = 0; i < 5; i++) {
      const letter = this.attempts[this.currentAttempt].word[i];
      this.attempts[this.currentAttempt].status[i] = this.checkLetterPositioning(this.targetWord[i], letter);
    }

    console.log(this.attempts);
    this.currentAttempt++;
  }

  private initWord() {
    this.targetWord = data[420];
    console.log(this.targetWord);
  }

  private checkLetterPositioning(targetLetter: string, attemptLetter: string) {
    if (!this.targetWord.includes(attemptLetter)) {
      return AttemptStatus.GRAY;
    }

    if (targetLetter === attemptLetter) {
      return AttemptStatus.GREEN;
    }

    return AttemptStatus.YELLOW
  }

}
