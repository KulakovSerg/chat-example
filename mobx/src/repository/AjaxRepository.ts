import { Chat, Message } from "../store/types";
import type { Repository as RepositoryInterface } from "./types";
import ActiveChats from "./__stubs__/activeChats.json";
import ArchiveChats from "./__stubs__/activeChats.json";
import Messages from "./__stubs__/messages.json";

export class Repository implements RepositoryInterface {
  getMessages(chatId: string): Promise<Message[]> {
    return Promise.resolve(Messages[chatId as any] as unknown as Message[]);
  }
  getActiveChats(): Promise<Chat[]> {
    return Promise.resolve(ActiveChats as Chat[]);
  }
  getArchiveChats(): Promise<Chat[]> {
    return Promise.resolve(ArchiveChats as Chat[]);
  }
}
