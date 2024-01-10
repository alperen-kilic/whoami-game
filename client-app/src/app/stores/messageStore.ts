import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { Message } from "../models/message";
import { makeAutoObservable, runInAction } from "mobx";

export default class MessageStore {
  messages: Message[] = [];
  hubConnection: HubConnection | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  createHubConnection = (lobbyId: string) => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(import.meta.env.VITE_GAME_URL + "?lobby=" + lobbyId)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    this.hubConnection
      ?.start()
      .catch((error) => console.log("Error establishing connection: ", error));

    this.hubConnection?.on("ReceiveMessage", (message: Message) => {
      runInAction(() => {
        message.createdAt = new Date(message.createdAt);
        this.messages.push(message);
      });
    });
  };
}
