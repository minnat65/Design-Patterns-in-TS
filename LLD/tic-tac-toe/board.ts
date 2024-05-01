import { PieceType } from "./piece-type";
import { Player } from "./player";
import { PlayingPiece } from "./playing-piece";

export class Board {
  public size: number;
  public playingBoard: PieceType[][]

  constructor(size: number = 3) { // 3 is default size
    this.size = size;;
    this.playingBoard = [];
    for(let i=0;i<size;i++){
      this.playingBoard.push(new Array(size).fill('_'));
    }
  }

  addPieces(row: number, col: number, piece: PlayingPiece): boolean {
    // validate the row and colum
    if(row < 0 || col < 0 || row >= this.size || col >= this.size) {
      throw new Error('Invalid Index.');
    }

    // if valide then put the value
    this.playingBoard[row][col] = piece.pieceType;
    return true;
  }

  getBoard() {
    for(let i=0;i<this.size;i++){
      console.log(...this.playingBoard[i]);
    }
  }

  checkWinner(player: Player) {
    // horizontal check
    for(let i=0;i<this.size;i++){
      let flag = true;
      for(let j=0;j<this.size-1;j++){
        if(this.playingBoard[i][j] !== 'X' && this.playingBoard[i][j] !== 'O'){
          flag=false;
          return;
        }
        if(this.playingBoard[i][j] !== this.playingBoard[i][j+1]){
          flag=false;
          break;
        }
      }
      if(flag) {
        return console.log(`${player.nme} is the Winner....`);
      }
    }

    // vertical check
    for(let i=0;i<this.size;i++){
      let flag = true;
      for(let j=0;j<this.size-1;j++){
        if(this.playingBoard[j][i] !== 'X' && this.playingBoard[j][i] !== 'O'){
          flag=false;
          return;
        }
        if(this.playingBoard[j][i] !== this.playingBoard[j+1][i]){
          flag=false;
          break;
        }
      }
      if(flag) {
        return console.log(`${player.nme} is the Winner....`);
      }
    }

    // diagonal check
  }
}