import { IObserver } from "../observers/interface";
import { IObservable } from "./interface";

export class IPhoneObservable implements IObservable {
  public users: IObserver[] = new Array();
  public stocks: number = 0; // number of stocks available;

  add(user: IObserver): void {
    this.users.push(user);
  }

  remove(user: IObserver): void {
    
  }

  notify(): void {
    for(let obj of this.users){
      obj.update();
    }
  }

  setData(stocksNumber: number): void {
    if(this.stocks === 0) { // it means we are adding item to the stocks
      this.notify();
    }
    this.stocks = stocksNumber;
  }

  getData() {
    console.log('Total Obserever: ', this.users.length);
  }
}