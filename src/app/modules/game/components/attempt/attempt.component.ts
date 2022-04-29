import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import { AttemptStatus } from '../../interfaces/attempt.interface';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.scss']
})
export class AttemptComponent implements OnInit, OnChanges {

  @ViewChild('tile1')
  tile1!: ElementRef;

  @ViewChild('tile2')
  tile2!: ElementRef;

  @ViewChild('tile3')
  tile3!: ElementRef;

  @ViewChild('tile4')
  tile4!: ElementRef;

  @ViewChild('tile5')
  tile5!: ElementRef;

  @Input()
  index: number = 0;

  @Input()
  currentTile: number = 0;

  @Input()
  currentAttempt: number = 0;

  @Input()
  currentWord: string = '';

  @Input()
  currentWordStatus: AttemptStatus[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (!this.tile1 || !this.tile2 || !this.tile3 || !this.tile4 || !this.tile5) {
      return;
    }

    this.tile1.nativeElement.value = this.currentWord[0] || '';
    this.tile2.nativeElement.value = this.currentWord[1] || '';
    this.tile3.nativeElement.value = this.currentWord[2] || '';
    this.tile4.nativeElement.value = this.currentWord[3] || '';
    this.tile5.nativeElement.value = this.currentWord[4] || '';

    if (this.currentAttempt <= this.index) {
      return;
    }

    console.log(this.currentWordStatus);

    if (this.currentWordStatus[0] === AttemptStatus.GRAY) {
      this.tile1.nativeElement.classList.add('tile--no-match');
    } else if (this.currentWordStatus[0] === AttemptStatus.YELLOW) {
      this.tile1.nativeElement.classList.add('tile--partial-match');
    } else if (this.currentWordStatus[0] === AttemptStatus.GREEN) {
      this.tile1.nativeElement.classList.add('tile--full-match');
    }

    if (this.currentWordStatus[1] === AttemptStatus.GRAY) {
      this.tile2.nativeElement.classList.add('tile--no-match');
    } else if (this.currentWordStatus[1] === AttemptStatus.YELLOW) {
      this.tile2.nativeElement.classList.add('tile--partial-match');
    } else if (this.currentWordStatus[1] === AttemptStatus.GREEN) {
      this.tile2.nativeElement.classList.add('tile--full-match');
    }

    if (this.currentWordStatus[2] === AttemptStatus.GRAY) {
      this.tile3.nativeElement.classList.add('tile--no-match');
    } else if (this.currentWordStatus[2] === AttemptStatus.YELLOW) {
      this.tile3.nativeElement.classList.add('tile--partial-match');
    } else if (this.currentWordStatus[2] === AttemptStatus.GREEN) {
      this.tile3.nativeElement.classList.add('tile--full-match');
    }

    if (this.currentWordStatus[3] === AttemptStatus.GRAY) {
      this.tile4.nativeElement.classList.add('tile--no-match');
    } else if (this.currentWordStatus[3] === AttemptStatus.YELLOW) {
      this.tile4.nativeElement.classList.add('tile--partial-match');
    } else if (this.currentWordStatus[3] === AttemptStatus.GREEN) {
      this.tile4.nativeElement.classList.add('tile--full-match');
    }

    if (this.currentWordStatus[4] === AttemptStatus.GRAY) {
      this.tile5.nativeElement.classList.add('tile--no-match');
    } else if (this.currentWordStatus[4] === AttemptStatus.YELLOW) {
      this.tile5.nativeElement.classList.add('tile--partial-match');
    } else if (this.currentWordStatus[4] === AttemptStatus.GREEN) {
      this.tile5.nativeElement.classList.add('tile--full-match');
    }
  }
}
