import { IObservable } from "../observable/interface";
import { IObserver } from "./interface";

export class TextNotification implements IObserver {
  public username: string;
  public observable: IObservable;

  constructor(user: string, observable: IObservable) {
    this.username = user;
    this.observable = observable;
  }

  update(): void {
    this.sendMessage();
  }

  sendMessage() {
    console.log('Sending the message to', this.username);
  }
}