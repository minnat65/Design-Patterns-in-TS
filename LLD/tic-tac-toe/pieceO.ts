import { PieceType } from "./piece-type";
import { PlayingPiece } from "./playing-piece";

export class PieceO extends PlayingPiece {
  constructor() {
    super(PieceType.O);
  }
}