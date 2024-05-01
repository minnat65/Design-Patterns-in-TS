import { IObservable } from "../observable/interface";
import { IObserver } from "./interface";

export class EmailNotification implements IObserver {
  public username: string;
  public observable: IObservable; // we can get the data from observable
  // for ex- currently we can send total item added to the stocks

  constructor(user: string, observable: IObservable) {
    this.username = user;
    this.observable = observable;
  }

  update(): void {
    this.sendEmail();
  }

  sendEmail() {
    console.log('Sending the email to', this.username);
  }
}