import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/modules/game/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  enterKey(event: string) {
    this.gameService.nextKey(event);
  }

}
