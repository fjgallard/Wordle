import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameModule } from '../game.module';

@Injectable({
  providedIn: GameModule
})
export class GameService {

  private $latestKey = new Subject();
  latestKey$ = this.$latestKey.asObservable();

  constructor() { }

  nextKey(key: string) {
    this.$latestKey.next(key);
  }
}
