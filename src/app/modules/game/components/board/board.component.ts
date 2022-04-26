import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private NUMBER_OF_ATTEMPTS = 6;

  // The current index of attempt we are currently working on
  currentAttempt = 0;

  // Array of words
  attempts: string[] = [];

  constructor() {
    for (let index = 0; index < this.NUMBER_OF_ATTEMPTS; index++) {
      this.attempts.push('');
    }
  }

  ngOnInit(): void {
  }

}