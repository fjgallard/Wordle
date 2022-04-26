import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.scss']
})
export class AttemptComponent implements OnInit, AfterViewInit {

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

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.tile1.nativeElement.value = this.index;
  }

}
