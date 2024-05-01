import { Board } from "./board";
import { Player } from "./player";

export class Game {
  public board: Board;
  public players: Player[];

  constructor(board: Board, player: Player[]){
    this.board = board;
    this.players = player;
  }
}