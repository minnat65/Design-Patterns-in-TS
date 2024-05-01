import { IObserver } from "../../observers/interface";

export interface IObservable {
  add(user: IObserver): void;
  remove(user: IObserver): void;
  notify(): void;
  setData(data: number): void;
  getData(): void;
}