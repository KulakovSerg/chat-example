import { makeAutoObservable } from "mobx";

export class Store {
  chats = new Map();

  constructor() {
    makeAutoObservable(this);
  }
}
