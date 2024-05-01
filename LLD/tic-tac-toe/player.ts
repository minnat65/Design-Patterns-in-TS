import { PlayingPiece } from "./playing-piece";

export class Player {
  public nme: string;
  public playingPiece: PlayingPiece;

  constructor(name: string, playingPice: PlayingPiece) {
    this.nme = name;
    this.playingPiece = playingPice; 
  }
};