import { PieceType } from "./piece-type";
import { PlayingPiece } from "./playing-piece";

export class PieceX extends  PlayingPiece {
  constructor() {
    super(PieceType.X);
  }
}