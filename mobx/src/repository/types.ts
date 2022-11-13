import type { Message, Chat } from "../store/types";

export interface Repository {
  getMessages: (chatId: string) => Promise<Message[]>;
  getChats: () => Promise<Chat[]>;
}
