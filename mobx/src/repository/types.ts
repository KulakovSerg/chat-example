import type { Message, Chat } from "../type";

export interface Repository {
  getMessages: (chatId: string) => Promise<Message[]>;
  getActiveChats: () => Promise<Chat[]>;
  getArchiveChats: () => Promise<Chat[]>;
}
