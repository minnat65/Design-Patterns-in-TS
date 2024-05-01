import { PieceType } from "./piece-type";

export class PlayingPiece {
  public pieceType: PieceType;

  constructor(pieceType: PieceType) {
    this.pieceType = pieceType;
  }
}