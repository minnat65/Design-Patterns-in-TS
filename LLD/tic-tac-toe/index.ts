import { Board } from "./board";
import { PieceO } from "./pieceO";
import { PieceX } from "./pieceX";
import { Player } from "./player";

const pieceO = new PieceO();
const pieceX = new PieceX();

const player1 = new Player('Minnat', pieceO);
console.log(player1);
const player2 = new Player('Ujjwal', pieceX);

const board = new Board(3);

board.addPieces(1,1,player1.playingPiece);
board.checkWinner(player1);
board.addPieces(0,1,player2.playingPiece);
board.checkWinner(player2);


board.addPieces(2,2,player1.playingPiece);
board.checkWinner(player1);
board.addPieces(0,2,player2.playingPiece);
board.checkWinner(player2);

board.addPieces(0,0,player2.playingPiece);
board.checkWinner(player2);

board.getBoard();